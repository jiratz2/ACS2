use  sakila;

select * from film;
select * from address;
select * from city;
select * from rental;
select * from inventory;
select * from actor;
select * from film_actor;
select * from customer;

-- 1
select title, length ,avg(length) as avg_len from film group by length having length > avg_len ;

-- 3
select title,count(rental_id) as rentnum from rental join inventory using (inventory_id) join film using(film_id) where rental_id = null group by title;

-- 5
select rating, count(film.title) as all_film from film group by rating order by rating desc;

-- 7
select actor_id,first_name, last_name, count(film.title) as film_acting
from actor join film_actor using(actor_id) join film using (film_id) group by actor_id;

-- 9
select first_name, last_name, rating, count(film.title) as rate_rent
from customer join rental using(customer_id) join inventory using(inventory_id)  
join film using(film_id) group by rating;


-- 10
create schema shop;
use shop;
create table user(
u_id numeric not null primary key,
    name varchar(20),
    email varchar(25)
	);
create table o_rder(
u_id numeric not null primary key,
foreign key (u_id) references user(u_id),
	order_no numeric,
	order_amount numeric,
    order_date date
    );
    
create table product(
p_id numeric not null primary key,
	name varchar(15),
    category numeric,
    foreign key (category) references product_category(c_id),
    price numeric,
    description varchar(200)
    );
create table product_category(
c_id numeric not null primary key,
	name varchar(10)
    );
create table payment(
u_id numeric not null,
foreign key (u_id) references user(u_id),
p_id numeric not null primary key,
	method varchar(20),
    amount numeric
    );
create table address(
u_id numeric not null,
foreign key (u_id) references user(u_id),
a_id numeric not null primary key,
	city varchar(20),
    state varchar(20),
    country varchar(30)
    );
create table tracking_detail(
t_id numeric not null primary key,
	order_no numeric,
    foreign key (order_no) references o_rder(order_no),
    status varchar(10)
    );

create table cart(
p_id numeric,
foreign key (p_id) references product(p_id),
cart_id numeric not null primary key,
	u_id numeric not null,
	foreign key (u_id) references user(u_id)
    );

-- 11
insert into user values(111, 'Anna', 'Anna@gmail.com');
insert into user values(101, 'Tom', 'Tomas@gmail.com');
insert into user values(120, 'Chevrus', 'Chev@gmail.com');
insert into o_rder values(111, 1, 2, 2005-05-26);
insert into o_rder values(101, 2, 4, 2005-06-24);
insert into o_rder values(120, 3, 1, 2005-06-30);
insert into product values(1101, 'mirror',32, 99, 'mirror mirror');
insert into product values(1720, 'television',11, 15000, 'smart-tv');
insert into product values(1343, 'lightblub',30, 99, 'warm light');
insert into product_category values(30, 'light');
insert into product_category values(11, 'electric');
insert into product_category values(32, 'glass');
insert into payment values(101, 234,'credits card',999);
insert into payment values(111, 213,'credits card', 15000);
insert into payment values(120, 123,'credits card', 99);
insert into address values(111, 70,'bkk','bkk','Thailand');
insert into address values(101,30,'bkk','bkk','Thailand');
insert into address values(120, 45,'bkk','bkk','Thailand');



