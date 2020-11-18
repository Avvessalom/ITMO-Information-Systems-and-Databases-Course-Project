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
                     "Type",
                     Additional_type,
                     Technic_rank,
                     Technic,
                     Ninja_technic,
                     War,
                     Battle cascade;

drop function if exists clan_selection_for_a_child(ninja_child integer) cascade;
drop function if exists seal_the_biju(biju_for_sealing integer, new_jinchuriki integer) cascade;