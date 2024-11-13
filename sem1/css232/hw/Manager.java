public class Manager extends Employee {
    private String dept;

    public Manager(String name, double salary, String dept){
        super(name,salary);
        this.dept = dept;
    }
    public String getdept(){
        return dept;
    }

    @Override
    public String toString(){
        return "Manager name is " + getname() + " Salary = " + getsalary() + " Department is " + getdept();
    }
}
