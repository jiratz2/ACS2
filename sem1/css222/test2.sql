-- 1
create schema lab2;
use lab2;
create table Order1(
	OrderID numeric not null primary key,
    Custom numeric not null,
    OrderD datetime not null,
    foreign key (Custom) references Customer(CustomerID)
);
create table Customer(
	CustomerID numeric not null primary key,
    FirstName varchar(100) not null,
    LastName varchar(100) not null,
    Email varchar(100) not null
);
create table Category(
	CategoryID numeric primary key
);
create table Product(
	ProductID numeric not null primary key,
    ProductName varchar(100) not null,
    Price decimal(10,2) not null,
    CategoryID numeric not null,
    foreign key (CategoryID) references Category(Category)
);
create table OrderDetail(
	OrderID numeric not null,
    foreign key (OrderID) references Order1(OrderID),
    ProductID numeric not null,
    foreign key (ProductID) references Product(ProductID),
    primary key (OrderID, ProductID),
    Quantity numeric not null
);

-- 2
insert into customer values('1','Ann','Watson','Anna@gmail.com');
insert into customer values('2','James','Marry','jamess@gmail.com');
insert into customer values('3','Violet','Sorrengel','vivisor@gmail.com');
insert into category values('1331');
insert into category values('1110');
insert into category values('1234');
insert into product values('121','Victtorian Historical Book','450','1331');
insert into product values('245','Harry Fantasy Fiction','590','1234');
insert into product values('888','Botanical Index','1250','1110');
insert into Order1 values('1210945','1','2022-07-11 22:22:22');
insert into Order1 values('3245678','2','2023-01-03 11:11:11');
insert into Order1 values('5467911','3','2024-02-07 13:45:40');
insert into OrderDetail values('1210945','121','1');
insert into OrderDetail values('3245678','245','1');
insert into OrderDetail values('5467911','888','1');


-- 3
create index Customer_idx on customer(CustomerID); 
create index category_idx on category(category);
create index product_idx on product(productid);

-- 4
select product.ProductName, customer.first_name,customer.last_name from order1 join customer using(customerID) join orderDetail using(orderID) join product using(productid) join category using(categoryid);

-- 5
select * from rental;
select customer_id,count(rental_id) as customer_rental from rental  group by customer_id;
select customer_id, count(rental_id) as customer_rental from rental where rental_id = (select rental_id from rental where count(rental_id) > 6 )group by customer_id;



-- 8 
select * from film;
delete from film where length > 120 and rating like 'PG-13';
update film set rating = 'PG-15' where length > 120 and rating like 'PG-13';
select film_id, title, length, rating from film where length > 120 and rating like 'PG-13';

-- 9
select film.title,
case rental_duration
		when 1 then 'Short'
        when 2 then 'Short'
        when 3 then 'Short'
        when 4 then 'Short'
        when 5 then 'Medium'
        when 6 then 'Medium'
        when 7 then 'Medium'
        when 8 then 'Medium'
        when 9 then 'Medium'
        when 10 then 'Medium'
        else 'Long'
	end as duration_category
from film;
        
-- 10
select a.first_name, a.last_name, count(fa.film_id) as film_count,
	case 
		when count(fa.film_id) in (0,1,2,3) then "Newcomer"
        when count(fa.film_id) in (4,5,6,7) then "Experienced"
        else "Veteran"
	end as actor_status
from actor a left join film_actor fa on a.actor_id = fa.actor_id group by a.actor_id;

