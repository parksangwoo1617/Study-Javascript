const car1 = new Car();
const car2 = new Car();

car1.shift === Car.prototype.shift;
car1.shift('D');
car1.shift('d');
car1.shift === car2.shift;

console.log(car1.userGear);