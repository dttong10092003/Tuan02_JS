class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} đang chạy ở tốc độ ${this.speed} km/h`);
      return this; 
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} đang chạy ở tốc độ ${this.speed} km/h`);
      return this;
    }
}
  
class EVCl extends CarCl {
    #charge;
  
    constructor(make, speed, charge) {
      super(make, speed);
      this.#charge = charge;
    }
  
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      console.log(`${this.make} đã sạc pin tới ${this.#charge}%`);
      return this; 
    }
  
    accelerate() {
      this.speed += 20; 
      this.#charge--;
      console.log(`${this.make} đang chạy ở tốc độ ${this.speed} km/h, với mức pin ${this.#charge}%`);
      return this;
    }
}
  
const rivian = new EVCl('Rivian', 100, 24);
  
rivian.accelerate().accelerate().brake().chargeBattery(90).accelerate(); 
  