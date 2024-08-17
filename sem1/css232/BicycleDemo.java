public class BicycleDemo {
    public static void main(String[] args) {
        Bicycle bike1 = new Bicycle();
        Bicycle bike2 = new Bicycle();
        System.out.println(bike1);

        bike1.changeCadence(50);
        bike1.changespeed(10);
        bike1.changgear(2);
        bike1.printGear();
        System.out.println(bike1);

        bike2.changeCadence(50);
        bike2.changespeed(10);
        bike2.changgear(2);
        bike2.changeCadence(40);
        bike2.changespeed(-10);
        bike2.changgear(3);
        bike2.printGear();
        System.out.println(bike2);
    }
}