"use strict";
var car;
var plateRegEx = /^[0-9]{4}[A-Z]{3}$/;
function createCar() {
    var plate = document.getElementById("inputPlate");
    var brand = document.getElementById("inputBrand");
    var color = document.getElementById("inputColor");
    if (plateRegEx.test(plate.value)) {
        var formInput = document.getElementById("formInput");
        formInput.style.display = "none";
        var addWheels = document.getElementById("addWheels");
        addWheels.style.display = "block";
        var carCreatedTitle = document.getElementById("carCreatedTitle");
        carCreatedTitle.style.display = "block";
        car = new Car(plate.value, brand.value, color.value);
        console.log(car);
        var pRes = document.getElementById("plateRes");
        pRes.innerHTML = "Plate: " + "<b>" + car.plate + "</b>";
        var bRes = document.getElementById("brandRes");
        bRes.innerHTML = "Brand: " + "<b>" + car.brand + "</b>";
        var cRes = document.getElementById("colorRes");
        cRes.innerHTML = "Color: " + "<b>" + car.color + "</b>";
    }
    else {
        alert("Matrícula incorrecta");
        return false;
    }
}
// Plate validator
// function validarMatriculaEuropea_Exp(plateVal:string) {
//     return plateVal.match("^[0-9]{4}[A-Z]{3}$");
// }
function addWheels(diamWheel1, diamWheel2, diamWheel3, diamWheel4, brandWheel1, brandWheel2, brandWheel3, brandWheel4) {
    var wheel1 = new Wheel(diamWheel1, brandWheel1);
    var wheel2 = new Wheel(diamWheel2, brandWheel2);
    var wheel3 = new Wheel(diamWheel3, brandWheel3);
    var wheel4 = new Wheel(diamWheel4, brandWheel4);
    // view selector
    var formInput = document.getElementById("formInput");
    formInput.style.display = "none";
    var addWheels = document.getElementById("addWheels");
    addWheels.style.display = "none";
    var showCarCreated = document.getElementById("showCarCreated");
    showCarCreated.style.display = "block";
    //  Wheels diameter
    var diamW1 = document.getElementById("diamW1");
    diamW1.innerHTML = "Diameter W 1: " + "<b>" + wheel1.diameter + "</b>";
    console.log(wheel1);
    var diamW2 = document.getElementById("diamW2");
    diamW2.innerHTML = "Diameter W 2: " + "<b>" + wheel2.diameter + "</b>";
    console.log(wheel2);
    var diamW3 = document.getElementById("diamW3");
    diamW3.innerHTML = "Diameter W 3: " + "<b>" + wheel3.diameter + "</b>";
    console.log(wheel3);
    var diamW4 = document.getElementById("diamW4");
    diamW4.innerHTML = "Diameter W 4: " + "<b>" + wheel4.diameter + "</b>";
    console.log(wheel4);
    //    Wheels Brand
    var brandW1 = document.getElementById("brandW1");
    brandW1.innerHTML = "Brand W 1: " + "<b>" + wheel1.brand + "</b>";
    var brandW2 = document.getElementById("brandW2");
    brandW2.innerHTML = "Brand W 2: " + "<b>" + wheel2.brand + "</b>";
    var brandW3 = document.getElementById("brandW3");
    brandW3.innerHTML = "Brand W 3: " + "<b>" + wheel3.brand + "</b>";
    var brandW4 = document.getElementById("brandW4");
    brandW4.innerHTML = "Brand W 4: " + "<b>" + wheel4.brand + "</b>";
}
