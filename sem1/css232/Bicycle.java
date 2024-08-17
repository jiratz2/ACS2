public class Bicycle {
    private int cadence = 0;
    private int speed = 0;
    private int gear = 1;
    public void changeCadence(int newValue){
        cadence = newValue;
    }
    public void changgear(int newValue){
        gear = newValue;
    }
    public void changespeed(int change){
        speed = speed + change;
    }
    public int getCadence(){
        return cadence;
    }
    public void printGear(){
        System.out.println("Gear :" + gear);
    }
    public String toString(){
        return "cadence:" + cadence + "speed:" + speed + "gear:" + gear;
    }

}