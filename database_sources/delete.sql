drop table if exists Hidden_Village,
                     Destroyed_village,
                     jinchuriki,
                     clan_leader,
                     Country,
                     Country_lord,
                     Citizen,
                     Parents,
                     Clan,
                     Ninja,
                     Ninja_parents,
                     Biju,
                     Ranked_ninja,
                     Ninjas_rank,
                     "type",
                     Additional_type,
                     Technic_rank,
                     Technic,
                     Ninja_technic,
                     War,
                     Battle,
                     heroes,
                     blood_restriction_of_clan cascade;

drop function if exists clan_selection_for_a_child(ninja_child integer) cascade;
drop function if exists seal_the_biju(biju_for_sealing integer, new_jinchuriki integer) cascade;
drop function if exists choose_kage_candidates(old_kage integer, war integer) cascade;
drop function if exists check_clan(ninja_to_check integer, clan_to_check integer) cascade;
drop function if exists period_of_government(country_leader_id integer) cascade;

drop function if exists destroy_village() cascade;
drop function if exists actions_with_village() cascade;
drop function if exists check_on_delete_jinchuriki() cascade;
drop function if exists check_blood_restriction() cascade;
drop function if exists check_clan_leader() cascade;
drop function if exists ninja_death() cascade;
drop function if exists check_parents() cascade;

drop index if exists status_ninja cascade;
