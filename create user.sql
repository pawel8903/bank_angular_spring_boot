drop database if exists bank;
create database bank;
use bank;

create table town(
	id int(11) not null auto_increment,
    town varchar(128) unique,
    
    primary key (id)

)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

create table `user`(
	id int(11) not null auto_increment,
    login varchar(128) unique,
    `password` varchar(128), /*nalezy zmienic na binary */
    street varchar(128),
    zip varchar(128),
    town varchar(128),
    
    primary key(id),
    
    foreign key (town) references town(town)
    /*nalezy zastanowic sie czy powinnienem referowac do id czy do nazwy, jak do nazwy to nie potrzebuje id*/
)ENGINE=InnoDB AUTO_INCREMENT=100000 DEFAULT CHARSET=utf8;

create table `account`(
	`id` int(11) not null auto_increment primary key,
    `account_number` bigint unique,
    `user_id` int(11) not null,
	`account_name` varchar(128) not null,
    `amount` double(53,2) default(0.00),

	foreign key (`user_id`) references `user`(`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

create table `transaction`(
	`id` int(11) not null auto_increment primary key,
    `account_id` int(11) not null,
    `amount` double(53,2) not null,
    `address` varchar(128),
    `type` varchar(128),
    `description` varchar(128),
    `date` datetime not null,
    `send_to_account` bigint not null,
    
    foreign key (`account_id`) references `account`(`id`)

)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

create table `recipient`(
	`id` int(11) not null auto_increment primary key,
    `name` varchar(128) not null,
    `account_number` bigint not null,
    `address` varchar(128),
    `user_id` int(11) not null,
    
    foreign key (`user_id`) references `user`(`id`)
    
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

insert into town  values(null,'Polska'),(null,'Niemcy'),(null,'Wielka Brytania'),(null,'Holandia'),(null,'Hiszpania'),(null,'Portugalia'),(null,'USA'),(null,'Gracja'),(null,'Brazylia');
insert into `user` values(null,'test1234','Test1234','Chopina','03-522','Polska');
insert into `account` values (null,5365932294633533,100000,'Konto za zero',4200);
insert into `account` values (null,5365932294633762,100000,'Konto oszczednościowe',5555);
insert into `transaction` values (null,1,-300.00,'przelew stały',null,'telefon komórkowy','2018-03-19 9:33:22',3455932294633762);
insert into `transaction` values (null,1,-400,'płatność kartą',null,'zakupy','2018-03-5 11:33:22',3455932294634362);
insert into `transaction` values (null,1,500,'przelew',null,'telefon komórkowy','2018-03-11 12:33:22',2323233432423423);
insert into `transaction` values (null,1,-500,'przelew stały',null,'Buty','2018-03-03 14:33:22',4645565657674453);
insert into `transaction` values (null,1,1000,'przelew stały',null,'Inne','2018-03-23 15:33:22',5645465464563454);
insert into `transaction` values (null,1,5500,'przelew stały',null,'Zakupy','2018-03-04 16:33:22',5464656567876865);
insert into `transaction` values (null,1,300,'przelew stały',null,'Telewizor','2018-03-11 17:33:22',5645645646464432);
insert into `transaction` values (null,1,500,'przelew stały',null,'tranzakcja własna','2018-03-23 17:33:22',4564564566776888);
insert into `transaction` values (null,1,-600,'przelew stały',null,'inne','2018-03-19 22:33:14',5675675675334788);
insert into `transaction` values (null,1,-400,'przelew stały',null,'Bluzka','2018-03-19 22:33:15',6756756755675577);
insert into `transaction` values (null,1,-300,'przelew stały',null,'telefon komórkowy','2018-03-13 22:33:22',4564566767777755);
insert into `transaction` values (null,1,-300,'przelew stały',null,'Samochód','2018-03-12 22:33:22',3333333333334444);
insert into `transaction` values (null,1,-300,'przelew stały',null,'inne','2018-03-11 22:33:22',3455467655675678);
insert into `recipient` values(null,'Katarzyna Kowalska',5365933214633762,'',100000);
