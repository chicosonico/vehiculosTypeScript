"use strict";
function createCar(plate, color, brand) {
    var car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    var formInput = document.getElementById("formInput");
    formInput.style.display = "none";
    var carCreated = document.getElementById("carCreated");
    carCreated.style.display = "block";
    var plateRes = document.getElementById("plateRes");
    plateRes.innerHTML = "Plate: " + car.plate;
    var brandRes = document.getElementById("brandRes");
    brandRes.innerHTML = "Brand: " + car.brand;
    var colorRes = document.getElementById("colorRes");
    colorRes.innerHTML = "Color: " + car.color;
    // document.body.innerText="CAR: PLATE: " + car.plate 
    // + " COLOR: " + car.color + " BRAND: " + car.brand;
}
