create table Hidden_Village
(
    village_ID serial primary key,
    name       varchar(100) unique not null
);

create table Clan
(
    clan_ID  serial primary key,
    name     varchar(100) unique not null,
    village  integer references Hidden_Village (village_ID) on delete cascade on update cascade,
    prestige integer             not null check (prestige >= 0 and prestige <= 10)
);

create table Ninja
(
    ninja_ID serial primary key,
    name     varchar(100) not null,
    age      integer      not null check (age >= 0),
    sex      varchar(1)   not null check (sex = 'M' or sex = 'F'),
    village  integer default 1 references Hidden_Village (village_ID) on delete set default on update cascade,
    clan     integer default 1 references Clan (clan_ID) on delete set default on update cascade,
    status   varchar(10)
);


create table Clan_leader
(
    clan_ID  integer references Clan (clan_ID) on delete cascade on update cascade,
    ninja_ID integer references Ninja (ninja_ID) on delete cascade on update cascade
);

create table Destroyed_village
(
    village_ID integer references Hidden_Village (village_ID) on delete cascade on update cascade,
    destroyer  integer references Ninja (ninja_ID) on delete set NULL on update cascade,
    quantity   integer
);

create table Country_lord
(
    lord_ID serial primary key,
    name    varchar(100) not null,
    age     integer      not null check (age > 15),
    sex     varchar(1)   not null check (sex = 'M' or sex = 'F'),
    status  varchar(10)
);

create table Country
(
    country_ID     serial primary key,
    name           varchar(100) unique                                                                       not null,
    country_lord   integer references Country_lord (lord_ID) on delete set null on update cascade,
    hidden_village integer references Hidden_Village (village_ID) on delete cascade on update cascade unique not null
);

create table Citizen
(
    citizen_ID serial primary key,
    village    integer references Hidden_Village (village_ID) on delete set null on update cascade,
    name       varchar(100) not null,
    age        integer      not null check (age >= 0),
    sex        varchar(1)   not null check (sex = 'M' or sex = 'F'),
    status     varchar(10)
);

create table Parents
(
    children_ID integer references Citizen (citizen_ID) on delete cascade on update cascade,
    parent_Id   integer references Citizen (citizen_ID) on delete cascade on update cascade
);

create table Ninja_parents
(
    children_ID integer references Ninja (ninja_ID) on delete cascade on update cascade,
    parent_ID   integer references Ninja (ninja_ID) on delete cascade on update cascade
);

create table Biju
(
    biju_Id        serial primary key,
    name           varchar(100) unique not null,
    count_of_tails integer unique      not null check (count_of_tails >= 0 and count_of_tails <= 10)
);

create table Jinchuriki
(
    ninja_ID integer references Ninja (ninja_id) on delete cascade on update cascade,
    biju     integer references biju (biju_id) on delete cascade on update cascade not null
);

create table Ninjas_rank
(
    rank_ID              serial primary key,
    name                 varchar(100) unique not null,
    condition_of_receipt varchar(100)
);

create table Ranked_ninja
(
    rank_ID  integer references Ninjas_rank (rank_ID) on delete cascade on update cascade,
    ninja_ID integer references Ninja (ninja_ID) on delete cascade on update cascade
);

create table Type
(
    type_ID serial primary key,
    name    varchar(100) unique not null
);

create table Additional_type
(
    addtype_ID serial primary key,
    name       varchar(100) unique not null
);

create table Technic_rank
(
    techrank_ID serial primary key,
    name        varchar(20) unique not null
);

create table Technic
(
    technic_ID        serial primary key,
    type              integer references Type (type_ID) on delete cascade on update cascade,
    additional_type   integer references Additional_type (addtype_ID) on delete cascade on update cascade,
    blood_restriction Boolean not null,
    rank              integer references Technic_rank (techrank_ID) on delete set null on update cascade,
    rune_seals        varchar(255)
);

create table Ninja_technic
(
    ninja_ID   integer references Ninja (ninja_ID) on delete cascade on update cascade,
    technic_ID integer references Technic (technic_ID) on delete cascade on update cascade
);

create table War
(
    war_ID            serial primary key,
    name              varchar(100) unique not null,
    attacking_country integer references Country (country_ID) on delete set null on update cascade check (attacking_country != defending_country),
    defending_country integer references Country (country_ID) on delete set null on update cascade check (defending_country != attacking_country),
    loss_of_attackers integer check (loss_of_attackers >= 0),
    loss_of_defenders integer check (loss_of_defenders >= 0)
);

create table Battle
(
    battle_ID serial primary key,
    war       integer references War (war_ID) on delete cascade on update cascade         not null,
    territory integer references Country (country_ID) on delete cascade on update cascade not null,
    loss      integer check (loss >= 0),
    duration  integer check (loss >= 0)                                                   not null,
    name      varchar(100) unique                                                         not null
);

create table Heroes
(
    ninja_ID integer references Ninja (ninja_id) on delete cascade on update cascade,
    war_Id   integer references War (war_ID) on delete cascade on update cascade
);

create table Blood_restriction_of_clan
(
    clan_ID    integer references clan (clan_id) on delete cascade on update cascade,
    technic_ID integer references technic (technic_id) on delete cascade on update cascade
);

-- Indexes

create index ninjaid on ninja using hash (ninja_id);
create index countryid on country using hash (country_ID);
create index clan_name on clan (clan_id, name);
