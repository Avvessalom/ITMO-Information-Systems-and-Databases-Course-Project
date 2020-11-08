create table Hidden_Village (
    village_ID serial primary key,
    name varchar(100) not null,
);

create table Ninja (
    ninja_ID serial primary key,
    name varchar(100) not null,
    age integer,
    sex varchar(1) not null,
    village integer references Hidden_Village(village_ID) on delete cascade,
    clan integer references Clan(clan_ID) on delete cascade,
    status varchar(10)
);

create table Destroyed_village (
    village_ID integer references Hidden_Village(village_ID) on delete cascade,
    destroyer integer references Ninja(ninja_ID) on delete cascade,
    quantity integer
);

create table Country (
    country_ID serial primary key,
    name varchar(100) not null,
    country_lord varchar(100) not null,
    hidden_village integer references Hidden_Village(village_ID) on delete cascade
);

create table Country_lord (
    lord_ID serial primary key,
    name varchar(100) not null,
    age integer not null,
    sex varchar(1),
    status varchar(10)
);

create table Citizen (
    citizen_ID serial primary key,
    village integer references Hidden_Village(village_ID) on delete cascade,
    name varchar(100) not null,
    age integer,
    sex varchar(1),
    status varchar(10)
);

create table Parents (
    children_ID integer references Citizen(citizen_ID) on delete cascade,
    parent_Id integer references Citizen(citizen_ID) on delete cascade
);

create table Clan (
    clan_ID serial primary key,
    name varchar(100) not null,
    leader integer references Ninja(ninja_ID) on delete cascade,
    village integer references Hidden_Village(village_ID) on delete cascade,
    prestige integer not null
);

create table Ninja_parents (
    children_ID integer references Ninja(ninja_ID) on delete cascade,
    parent_ID integer references Ninja(ninja_ID) on delete cascade
);

create table Biju (
    biju_Id serial primary key,
    name varchar(100) not null,
    count_of_tails integer not null,
    jinchuriki integer references Ninja(ninja_ID) on delete cascade
);

create table Ninjas_rank (
    rank_ID serial primary key,
    name varchar(100) not null,
    condition_of_receipt varchar(100)
);

create table Ranked_ninja (
    rank_ID integer references Ninjas_rank(rank_ID) on delete cascade,
    ninja_ID integer references Ninja(ninja_ID) on delete cascade
);

create table Type (
    type_ID serial primary key,
    name varchar(100) not null
);

create table Additional_type (
    addtype_ID serial primary key,
    name varchar(100) not null
);

create table Technic_rank (
    techrank_ID serial primary key,
    name varchar(20) not null
);

create table Technic (
    technic_ID serial primary key,
    type integer references Type(type_ID) on delete cascade,
    additional_type integer references Additional_type(addtype_ID) on delete cascade,
    blood_restriction Boolean not null,
    rank integer references Technic_rank(techrank_ID) on delete cascade
    rune_seals varchar(255)
);

create table Ninja_technic (
    ninja_ID integer references Ninja(ninja_ID) on delete cascade,
    technic_ID integer references Technic(technic_ID) on delete cascade
);

create table War (
    war_ID serial primary key,
    name varchar(100) not null,
    attacking_country integer references Country(country_ID),
    defending_country integer references Country(country_ID),
    loss_of_attackers integer,
    loss_of_defenders integer
);

create table Battle (
    battle_ID serial primary key,
    war integer references War(war_ID) on delete cascade,
    territory integer references Country(country_ID) on delete cascade,
    loss integer,
    duration integer,
    name varchar(100) not null
);
