select name,
	case
		when language.name in ("English","Italian","French","German") then "latin1"
        when language.name in ("Japanese","Mandarin") then "ult8"
        else "Unknown"
	end character_set
from language;

select sum(case when rating = 'PG' then 1 else 0 end) PG,
		sum(case when rating = 'G' then 1 else 0 end) G,
        sum(case when rating = 'NC-17' then 1 else 0 end) NC17,
        sum(case when rating = 'PG-13' then 1 else 0 end) PG13,
        sum(case when rating = 'R' then 1 else 0 end) R
from film ;

select table_name,index_name,column_name,non_unique,index_type 
from information_schema.statistics where table_schema = 'sakila';

select concat('ALTER TABLE', table_name,' ADD INDEX ',index_name,' (',group_concat(column_name order by seq_in_index),');') as index_command
from information_schema.statistics where table_schema = 'sakila' and table_name = 'customer' GROUP BY index_name;