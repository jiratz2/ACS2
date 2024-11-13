public class test {
    
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
    
    public class fulltimeworker extends worker{
        private int hours_worked;
        public fulltimeworker(String name, double salary_rate,int hours_worked){
            super(name, salary_rate);
            this.hours_worked = hours_worked;
        }
        public int gethours(){
            return hours_worked;
        }

        @Override
        public double computePav(){
            if(hours_worked > 240){
            hours_worked = 240;
            }
            return hours_worked * salary_rate;
        }
    }
    
    public class workertest {
        public static void main(String[] args) {
            fulltimeworker Emp_A = new fulltimeworker("Thai", 80.5, 250);
            System.out.println("Name = " + Emp_A.getname() + " Salary rate = " + Emp_A.getsalary() + " Has been working for " + Emp_A.gethours() + " hours Get = " + Emp_A.computePav());
            hourlyworker Emp_B = new hourlyworker("Man", 40.0, 50);
            System.out.println("Name = " + Emp_B.getname() + " Salary rate = " + Emp_B.getsalary() + " Has been working for " + Emp_B.gethours() + " hours Get = " + Emp_B.computePav());
        }
    }


}
