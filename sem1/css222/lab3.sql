select * from student
inner join takes
on student.ID = takes.ID;

select * from takes
inner join student
on student.ID = takes.ID;
 
select instructor.id , instructor.name ,count(teaches.sec_id) as allsection
 from instructor left outer join teaches on instructor.id = teaches.id
 group by instructor.id, teaches.sec_id;
 
select teaches.course_id, teaches.sec_id, semester,year ,name
 from teaches left join instructor on instructor.id = teaches.id where semester like 'Spring' and year = 2010;
 
select department.dept_name, count(instructor.dept_name) as allinstructor from department natural join instructor
group by department.dept_name, instructor.dept_name;