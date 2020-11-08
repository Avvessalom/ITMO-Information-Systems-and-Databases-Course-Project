create table Hidden_Village (
    village_ID serial primary key,
    name varchar(100),
);

create table Ninja (
    ninja_ID serial primary key,
    name varchar(100),
    age integer,
    sex varchar(1),
    village integer references Hidden_Village(village_ID),
    clan integer references Clan(clan_ID),
    status varchar(10)
);

create table Destroyed_village (
    village_ID integer references Hidden_Village(village_ID),
    destroyer integer references Ninja(ninja_ID),
    quantity integer
);

create table Country (
    country_ID serial primary key,
    name varchar(100),
    country_lord varchar(100),
    hidden_village integer references Hidden_Village(village_ID)
);

create table Country_lord (
    lord_ID serial primary key,
    name varchar(100),
    age integer,
    sex varchar(1),
    status varchar(10)
);

create table Citizen (
    citizen_ID serial primary key,
    village integer references Hidden_Village(village_ID),
    name varchar(100),
    age integer,
    sex varchar(1),
    status varchar(10)
);

create table Parents (
    children_ID integer references Citizen(citizen_ID),
    parent_Id integer references Citizen(citizen_ID)
);

create table Clan (
    clan_ID serial primary key,
    name varchar(100),
    leader integer references Ninja(ninja_ID),
    village integer references Hidden_Village(village_ID),
    prestige integer
);

create table Ninja_parents (
    children_ID integer references Ninja(ninja_ID),
    parent_ID integer references Ninja(ninja_ID)
);

create table Biju (
    biju_Id serial primary key,
    name varchar(100),
    count_of_tails integer,
    jinchuriki integer references Ninja(ninja_ID)
);

create table Ninjas_rank (
    rank_ID serial primary key,
    name varchar(100),
    condition_of_receipt varchar(100)
);

create table Ranked_ninja (
    rank_ID integer references Ninjas_rank(rank_ID),
    ninja_ID integer references Ninja(ninja_ID)
);

create table Type (
    type_ID serial primary key,
    name varchar(100)
);

create table Additional_type (
    addtype_ID serial primary key,
    name varchar(100)
);

create table Technic_rank (
    techrank_ID serial primary key,
    name varchar(20)
);

create table Technic (
    technic_ID serial primary key,
    type integer references Type(type_ID),
    additional_type integer references Additional_type(addtype_ID),
    blood_restriction Boolean,
    rank integer references Technic_rank(techrank_ID)
    rune_seals varchar(255)
);

create table Ninja_technic (
    ninja_ID integer references Ninja(ninja_ID),
    technic_ID integer references Technic(technic_ID)
);

create table War (
    war_ID serial primary key,
    name varchar(100),
    attacking_country integer references Country(country_ID),
    defending_country integer references Country(country_ID),
    loss_of_attackers integer,
    loss_of_defenders integer
);

create table Battle (
    battle_ID serial primary key,
    war integer references War(war_ID),
    territory integer references Country(country_ID),
    loss integer,
    duration integer,
    name varchar(100)
);