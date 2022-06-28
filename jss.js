// const car=function(make,speed){
//     this.make=make;
//     this.speed=speed;
//     // console.log('${this.make} has speed of ${this.speed}');

// };
// const bmw=new car('bmw',120);
// car.prototype.break=function(){
//     this.speed-=5;
//     console.log('${this.make} has speed of ${this.speed}');
// }
// bmw.break();
// bmw.break();
// bmw.break();
// bmw.break();
const car= function(make, speed){
this.make=make;
this.speed=speed;
}

car.prototype.break=function(){
    this.speed-=5;
}
const ev= function(make,speed,charge ){
    car.call(this,make, speed);
    this.charge=charge;

}

ev.prototype=Object.create(car.prototype);
ev.prototype.chargeBattery=function(chargeTo){
    this.charge=chargeTo;
}
ev.prototype.acc=function(){
    this.speed+=20;
    this.charge-=1;
    console.log(`${this.make} has speed of ${this.speed}km/hr and battery of ${this.charge}%`);
}
const tesla =new ev('tesla', 120, 23);
tesla.chargeBattery(90);
tesla.acc();

