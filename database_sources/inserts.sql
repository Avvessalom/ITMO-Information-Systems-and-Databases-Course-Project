insert into Hidden_Village(name) values
	('homeless'),		--1
	('Konoha'), 		--2
	('Rain'), 		    --3
	('Sand'), 		    --4
	('Rock'), 		    --5
	('Tonika'); 		--6

insert into Clan(name,village,prestige) values
	('clanless',1,0), 		--1
	('Uzumaki',1,10), 		--2
	('Uchiha',1,9), 		--3
	('Hanzo',2,7), 			--4
	('Sabakune',3,2), 		--5
	('Shirogane',3,8), 		--6
	('Kamizuru',4,4), 		--7
	('Hugo', 1, 7); 		--8

insert into Ninja(name, age,sex,village, clan, status) values
	('Hinata Hugo',36,'F',2,8,'alive'),		--1
	('Naruto Uzumaki',36,'M',2,2,'alive'),		--2 ХОКАГЭ
	('Sasuke Uchiha', 36, 'M',2,3,'alive'),		--3
	('Sakura Haruno', 36, 'F',2,1,'alive'),		--4 лол
	('Sarada Uchiha', 13, 'F',2,3, 'alive'),	--5 дочь Сукуры Харуно и Саскэ Учиха
	('Itachi Uchiha', 21, 'M',2,3, 'dead'),		--6
	('Roman Uzumaki', 20, 'M',2,2, 'alive'), 	--7 будущий хокагэ
	('Eugene Uchiha', 22, 'M',2,3, 'alive'), 	--8 чудом выжил
	('Salamandr Hanzo', 70, 'M', 3, 4, 'dead'), --9 босс деревни дождя
	('Konan', 35, 'F', 3, 1, 'dead'),		    --10
	('Gaara', 36, 'M', 4, 1, 'alive'),		    --11 5 казэкагэ
	('Rasa', 40, 'M', 4, 1, 'dead'),		    --12 ЭТО БАТЯ ГААРЫ И 4 КАЗЭКАГЭ
	('Deidara', 20, 'M', 5, 1, 'dead');		    --13

insert into Clan_leader(clan_ID, ninja_ID) values
	(8,1),
	(2,2),
	(3,3),
	(4,9);

insert into Destroyed_village(village_ID, destroyer, quantity) values
	(6, 9, 1488);

insert into Country_lord(name, age, sex, status) values
	('Van Darkholm',55, 'M', 'alive'),		--1
	('Pain', 33, 'M', 'dead'),  			--2
	('Billy', 48, 'M', 'alive'),			--3
	('Snake', 45, 'M', 'alive');			--4

insert into Country(name, country_lord, hidden_village) values
	('Fire', 1, 2),					--1
	('Fire', 1, 6),					--2
	('Rain', 2, 3),					--3
	('Rice', 3, 4),					--4
	('Dirth', 4, 5);				--5

insert into Citizen(village, name, age, sex, status) values
	(1, 'Tanaka', 11, 'M', 'alive'),		--1
	(1, 'Megumin', 15, 'F', 'alive'),		--2
	(2, 'Anton', 42, 'M', 'alive'),			--3
	(3, 'Anon', 30, 'M', 'alive'),			--4
	(3, 'Eot', 29, 'F', 'alive'),			--5
	(3, 'Lichi', 1, 'F', 'alive'),			--6
	(4, 'Kazuma Kiryuu', 20, 'M', 'alive'),	--7
	(5, 'Goro Majima', 24, 'M', 'alive'),	--8
	(6, 'Cinderella', 19, 'F', 'dead');		--9

insert into Parents(children_ID, parent_Id) values
	(6,4),
	(6,5);

insert into Ninja_parents(children_ID, parent_ID) values
	(5,3),
	(5,4);

insert into Biju(name, count_of_tails) values
	('Kyuubi',9),			--1
	('Chibi',1);			--2

insert into Jinchuriki(ninja_ID, biju) values
	(2,1),
	(11,2);

insert into Ninjas_rank(name, condition_of_receipt) values
	('Genin', 'Pass school exam'),				            --1
	('Chuunin', 'Complete list of missions'),		        --2
	('Jounin', 'Complete list of high ranked missions'),	--3
	('Hokage', 'Hero of war');				                --4

insert into Ranked_ninja(rank_ID, ninja_ID) values
	(1, 5),
	(2, 13),
	(3, 1),
	(3, 3),
	(3, 4),
	(3, 6),
	(3, 7),
	(3, 8),
	(3, 10),
	(4, 2),
	(4, 9),
	(4, 11),
	(4, 12);

insert into Type(name) values
	('dirt'),		--1
	('wind'),		--2
	('fire'),		--3
	('water'),		--4
	('wind'),		--5
	('lighting');	--6

insert into Additional_type(name) values
	('eyes'),
	('blood');

insert into Technic_rank(name) values
	('A'),		--1
	('B'),		--2
	('C'),		--3
	('D'),		--4
	('E'),		--5
	('F');		--6

insert into Technic(type, additional_type, blood_restriction, rank, rune_seals) values
	(5,1,false,1,'oak tree kaze'),
	(6,1,true, 2,'red buul');

insert into Ninja_technic(ninja_ID, technic_ID) values
	(2,1),
	(3,2);

insert into War(name, attacking_country, defending_country, loss_of_attackers,loss_of_defenders) values
	('WW2', 2,3,666666,123123);

insert into Battle(war, territory, loss, duration, name) values
	(1,3,666666,365,'Battle of Stalingrad');
