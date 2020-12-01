-- Functions

create or replace function clan_selection_for_a_child(ninja_child integer) returns void as
$$
declare
    first_parent              integer;
    second_parent             integer;
    clan_of_the_first_parent  integer;
    clan_of_the_second_parent integer;
begin
    first_parent = (select parent_id from ninja_parents where children_id = ninja_child limit 1);
    second_parent = (select parent_id from ninja_parents where children_id = ninja_child offset 1);
    clan_of_the_first_parent = (select prestige
                                from ninja
                                         join clan on clan_id = ninja.clan
                                where ninja_id = first_parent);
    clan_of_the_second_parent = (select prestige
                                 from ninja
                                          join clan on clan_id = ninja.clan
                                 where ninja_id = second_parent);
    if (clan_of_the_first_parent > clan_of_the_second_parent) then
        update Ninja
        set clan = clan_of_the_first_parent
        where ninja_ID = ninja_child;
    else
        update Ninja
        set clan = clan_of_the_second_parent
        where ninja_ID = ninja_child;
    end if;
end;
$$
    language plpgsql;

create or replace function seal_the_biju(biju_for_sealing integer, new_jinchuriki integer) returns void as
$$
declare
    previous_jinchuriki integer;
begin
    previous_jinchuriki = (select ninja_id from jinchuriki where biju = biju_for_sealing);
    update ninja
    set status = 'dead'
    where ninja_id = previous_jinchuriki;
    insert into jinchuriki (ninja_id, biju) values (new_jinchuriki, biju_for_sealing);
end;
$$
    language plpgsql;

create or replace function choose_kage_candidates(old_kage integer, war integer) returns integer as
$$
declare
    village_of_kage integer;
    candidates      integer;
begin
    village_of_kage = (select village from ninja where ninja_id = old_kage);
    candidates = (select *
                  from heroes
                           join ninja on ninja.ninja_id = heroes.ninja_id
                  where village = village_of_kage);
    return candidates;
end;
$$
    language plpgsql;


--Triggers

create function destroy_village() returns trigger as
$$
begin
    insert into hidden_village(name) values ('ruin of village');
end;
$$
    language plpgsql;

create function actions_with_village() returns trigger as
$village$
declare
    destroy_quantity integer ;
begin
    if (tg_op = 'delete') then
        destroy_quantity = (select quantity from destroyed_village where destroyed_village.village_id = old.village_id);
        insert into destroyed_village(village_id, quantity) values (old.village_id, destroy_quantity + 1);
    end if;
end;
$village$ language plpgsql;

create function check_on_delete_jinchuriki() returns trigger as
$$
begin
    if (tg_op = 'delete') then
        raise exception 'Jinchuriki cannot be removed';
    end if;
end;
$$ language plpgsql;

create function ninja_death() returns trigger as
$$
declare
    old_country  integer;
    rank_of_dead integer;
begin
    rank_of_dead = (select rank_id from ranked_ninja where ranked_ninja.ninja_id = old.ninja_id);
    if (rank_of_dead = 4) then
        old_country = (select country_id
                       from country
                                join hidden_village hv on hv.village_id = country.hidden_village
                       where old.village = village_id);
        select choose_kage_candidates(old.ninja_id, old_country);
    end if;
end;
$$
    language plpgsql;
-- Triggers

create trigger on_destroy
    after insert or update
    on destroyed_village
    for each statement
execute procedure destroy_village();

create trigger on_jinchuriki_die
    before delete
    on jinchuriki
    for each statement
execute procedure check_on_delete_jinchuriki();

create trigger on_actions_with_village
    after delete
    on hidden_village
    for each row
execute procedure actions_with_village();

create trigger on_death
    after update
    on ninja
    for each statement
execute procedure ninja_death();
