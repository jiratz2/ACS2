public void add(Employee e) {
    subordinates.add(e);
}

public void remove(Employee e) {
    subordinates.remove(e);
}

public List<Employee> getSubordinates() {
    return subordinates;
}

@Override
public String toString() {
    return "Employee :[ Name : " + name + ", dept: " + dept + ", salary :" + salary + " ]";
}
