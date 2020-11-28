insert into Hidden_Village(name) values
	('kiemuyu'),
	('remake'),
	('iwa'),
	('ihi'),
	('soshi'),
	('mihahi'),
	('hisea'),
	('urorima'),
	('reseshiho'),
	('shiwinine'),
	('ruyunu');

insert into Clan(name,village,prestige) values
	('shisechimi',7,97),
	('aneoe',10,59),
	('tekesetsuta',8,44),
	('ruimashi',5,21),
	('mohiwakoe',4,48),
	('noehi',4,97),
	('hemukomase',6,61),
	('hiratsu',2,21),
	('yaruku',8,76),
	('nimekiwe',2,2),
	('tenisurete',0,20);

insert into Ninja(name,age,sex,village,clan,status) values
	('woya rusa',51,'M',8,3,'dead'),
	('ine mishi',17,'M',8,9,'dead'),
	('wahiya yanuke',42,'F',10,8,'alive'),
	('nutsu ake',83,'M',6,8,'dead'),
	('sume hotana',23,'F',10,1,'dead'),
	('kuwi ekore',35,'F',10,8,'dead'),
	('haruu rawi',8,'M',5,9,'alive'),
	('tea yaromu',49,'F',2,4,'dead'),
	('neyosu tsurio',56,'M',4,9,'alive'),
	('mitoka muatsu',89,'F',6,1,'dead'),
	('wayue wechi',17,'F',4,9,'dead');

insert into Clan_leader(clan_ID,ninja_ID) values
	(1,4),
	(2,5),
	(3,4),
	(4,2),
	(5,9),
	(6,4),
	(7,9),
	(8,9),
	(9,8),
	(10,9),
	(11,5);

