
abstract public class worker {
    private String name;
    protected double salary_rate;
    public worker(String name,double salary_rate){
        this.name = name;
        this.salary_rate = salary_rate;
    }
    public String getname(){
        return name;
    }
    public double getsalary(){
        return salary_rate;
    }

    abstract public double computePav();
}
