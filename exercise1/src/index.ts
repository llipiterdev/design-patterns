import { CarBuilder } from './CarBuilder';

const car = new CarBuilder()
    .setEngine("V8")
    .setColor("Blue")
    .setTires("aluminum")
    .setSound("Premium")
    .setGPS(true)
    .setHeadlights("LED")
    .setSunroof(true)
    .setReverseCamera(true)
    .setElectric(false)
    .build();

console.log('Car configuration: ', car);
// console.log(`Engine: ${car.getEngine()}`);
// console.log(`Color: ${car.getColor()}`);
// console.log(`Tires: ${car.getTires()}`);
// console.log(`Sound: ${car.getSound()}`);
// console.log(`GPS: ${car.hasGPS()}`);
// console.log(`Headlights: ${car.getHeadlights()}`);
// console.log(`Sunroof: ${car.hasSunroof()}`);
// console.log(`Reverse Camera: ${car.hasReverseCamera()}`);
// console.log(`Electric: ${car.isElectric()}`);