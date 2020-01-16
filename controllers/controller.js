"use strict";
function createCar(plate, color, brand) {
    var car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    var formInput = document.getElementById("formInput");
    formInput.style.display = "none";
    // document.body.innerText="CAR: PLATE: " + car.plate 
    // + " COLOR: " + car.color + " BRAND: " + car.brand;
}
