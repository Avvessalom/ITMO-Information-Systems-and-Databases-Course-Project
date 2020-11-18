-- по функциям:
-- выбор более престижного клана при рождении микрочела     V
-- захват бидзю и запечатывание в микрочеле                 V
-- добавление битвы                                         X
-- выбор нового каге                                        X

-- внести в ER модель таблицу "clan_leader"                 X
-- заполнить тестовыми данными                              Х
-- адекватно настроить ограничения целостности              Х

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
    language plpgsql