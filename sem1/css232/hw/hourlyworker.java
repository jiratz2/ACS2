public class hourlyworker extends worker{
    private int hours_worked;

    public hourlyworker(String name,double salary_rate,int hours_worked){
        super(name, salary_rate);
        this.hours_worked = hours_worked;
    }
    public int gethours(){
        return hours_worked;
    }

    @Override
    public double computePav(){
        if(hours_worked > 60){
            hours_worked = 60;
        }
        return hours_worked * salary_rate;
    }
}