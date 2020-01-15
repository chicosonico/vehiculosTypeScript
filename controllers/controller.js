"use strict";
function createCar(plate, brand, color) {
    var car = new Car(plate, brand, color);
    car.addWheel(new Wheel(2, "SEAT"));
    document.body.innerText = "CAR: PLATE: " + car.plate
        + " COLOR: " + car.color + " BRAND: " + brand
        + " WHEELS: " + car.wheels;
}
