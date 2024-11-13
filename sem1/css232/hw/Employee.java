public class Employee {
    private String name;
    private double salary;

    public Employee(String name,Double salary){
        this.name = name;
        this.salary = salary;
    }

    public String getname(){
        return name;
    }
    public double getsalary(){
        return salary;
    }

    @Override
    public String toString(){
        return "Employee name is " + name + " Salary = " + salary;
    }
}