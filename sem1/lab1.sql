create schema lab1;
use lab1;

create table THEMEPARK (
	PARK_CODE varchar(10),
    PARK_NAME varchar(35),
    PAR_CITY varchar(50),
    PARK_COUNTRY char(2),
    primary key (PARK_CODE) );

create table EMPLOYEE (
	EMP_NUM numeric(4),
    EMP_TITLE varchar(4),
    EMP_LNAME varchar(15),
    EMP_FNAME varchar(15),
    EMP_DOB date,
    EMP_HIRE_DATE date,
    EMP_AREACODE varchar(4),
    EMP_PHONE varchar(12),
    PARK_CODE varchar(10),
    primary key (EMP_NUM),
    foreign key (PARK_CODE) references THEMEPARK(PARK_CODE) );

create table TICKET (
	TICKET_NO numeric(10),
    TICKET_PRICE numeric(4,2),
    TICKET_TYPE varchar(10),
    PARK_CODE varchar(10),
    primary key (TICKET_NO),
    foreign key (PARK_CODE) references THEMEPARK(PARK_CODE) );
    
create table ATTRACTION (
	ATTRACT_NO numeric(10),
    PARK_CODE varchar(10),
    ATTRACT_NAME varchar(35),
    ATTARCT_AGE numeric(3),
    ATTRACT_CAPACITY numeric(3),
    primary key (ATTRACT_NO),
    foreign key (PARK_CODE) references THEMEPARK(PARK_CODE) );
    
create table HOUR (
	EMP_NUM numeric(4),
    ATTRACT_NO numeric(10),
    HOURS_PER_ATTRACT numeric(2),
    HOUR_RATE numeric(4,2),
    DATE_WORKED date,
    primary key (EMP_NUM , ATTRACT_NO),
    foreign key (EMP_NUM) references EMPLOYEE(EMP_NUM),
    foreign key (ATTRACT_NO) references ATTRACTION(ATTRACT_NO));
    
create table SALES (
	TRANSACTION_NO numeric,
    PARK_CODE varchar(10),
    SALE_DATE date,
    primary key (TRANSACTION_NO),
    foreign key (PARK_CODE) references THEMEPARK(PARK_CODE) );
    
create table SALESLINE (
	TRANSACTION_NO numeric,
    LINE_NO numeric(2),
    TICKET_NO numeric(10),
    LINE_QTY numeric(4),
    LINE_PRICE numeric(9,2),
    primary key (TRANSACTION_NO),
    foreign key (TRANSACTION_NO) references SALES(TRANSACTION_NO),
    foreign key (TICKET_NO) references TICKET(TICKET_NO) );
    
show tables;