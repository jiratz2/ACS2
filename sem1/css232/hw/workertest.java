
public class workertest {
    public static void main(String[] args) {
        fulltimeworker Emp_A = new fulltimeworker("Thai", 80.5, 250);
        System.out.println("Name = " + Emp_A.getname() + " Salary rate = " + Emp_A.getsalary() + " Has been working for " + Emp_A.gethours() + " hours Get = " + Emp_A.computePav());
        hourlyworker Emp_B = new hourlyworker("Man", 40.0, 50);
        System.out.println("Name = " + Emp_B.getname() + " Salary rate = " + Emp_B.getsalary() + " Has been working for " + Emp_B.gethours() + " hours Get = " + Emp_B.computePav());
    }
}