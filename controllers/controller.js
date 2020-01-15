"use strict";
function createCar(plate, color, brand) {
    var car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    document.body.innerText = "CAR: PLATE: " + car.plate
        + " COLOR: " + car.color + " BRAND: " + car.brand
        + " WHEELS: " + car.wheels;
}
