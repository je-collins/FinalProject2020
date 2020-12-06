use mydb;

create table users (ID int not null auto_increment,
AuthorEmail varchar(50) not null unique,
UserName varchar(20),
Passwork varchar(10),
Tier tinyint,
Primary Key (ID)
);

create table events (eventID int not null auto_increment,
title varchar(50) not null,
description varchar(255) not null,
url varchar(255),
StartDate Date,
EndDate Date,
AuthorID int,
Location varchar(255),
Active tinyint,
Primary Key (eventID),
Foreign Key (AuthorID) references users (ID)
);