use university;
-- 1
select title from course where dept_name = 'Comp. Sci.' and credits = 3;
-- 2
select distinct(takes.ID) from teaches join instructor using (ID) join takes using (course_id, sec_id, semester, year) where instructor.name = 'Einstein';
-- 3
select max(salary) from instructor;
-- 4
select name from instructor where salary = (select max(salary) from instructor);
-- 5
select count(id) as enrollment, course_id from takes where semester = 'Fall' and year = 2009 group by course_id;
-- 6
select max(enrollment) as maximun_enrollment from (select sec_id,count(ID) as enrollment from takes where semester = 'Fall' and year = 2009 group by sec_id) as enroll;
-- 7
select course_id,sec_id from (select count(ID) as enrollment , sec_id,course_id from takes where semester = 'Fall' and year = 2009 group by course_id, sec_id) as max_sec_enroll 
order by enrollment desc limit 1;

-- 8 แก้เงื่อนไขการรับค่าชั่วคราว
alter table course drop constraint course_chk_1;
alter table course add constraint course_chk_1 check (credits >= 0 );
insert into course (course_id, title, credits) values ('CS-001', 'Weekly seminar', 0);
select * from course;
-- delete from course where course_id = 'CS-001';
-- alter table course drop constraint course_chk_1;
-- alter table course add constraint course_chk_1 check (credits > 0);

-- 9
insert into section (course_id, sec_id, semester, year) values ('CS-001', 1, 'Fall', 2009);

-- 10
insert into takes (id, course_id, sec_id, semester, year) select student.id, 'CS-001', 1, 'Fall', 2009 from student where dept_name = 'Comp Sci.';
-- 11
delete from takes where id in (select id from student where student.name = 'Chavez') and course_id = 'CS-001' and sec_id = '1' and semester = 'Fall' and year = 2009;
-- 12
delete from course where course_id = 'CS-001';
-- 13
delete from takes where (course_id, sec_id, semester, year) in (select course_id,sec_id,semester,year from course natural join section where lower(title) like '%database%');
