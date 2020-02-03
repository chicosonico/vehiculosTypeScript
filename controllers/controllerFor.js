"use strict";
var car;
var plateRegEx = /^[0-9]{4}[a-zA-Z]{3}$/;
var diamRegEx = /^([0-9])*$/;
function createCar() {
    //  get car data
    var plate = document.getElementById("inputPlate");
    var brand = document.getElementById("inputBrand");
    var color = document.getElementById("inputColor");
    //empty field validator
    if (plate.value == "" || brand.value == "" || color.value == "") {
        alert("Los campos no pueden quedar vacios");
        return false;
    }
    if (plateRegEx.test(plate.value)) { // plate format validator
        // form selector
        var formInput = document.getElementById("formInput");
        formInput.style.display = "none";
        var addWheels = document.getElementById("addWheels");
        addWheels.style.display = "block";
        var carCreatedTitle = document.getElementById("carCreatedTitle");
        carCreatedTitle.style.display = "block";
        //Car creator
        car = new Car(plate.value, brand.value, color.value);
        console.log(car);
        var pRes = document.getElementById("plateRes");
        pRes.innerHTML = "Plate: " + "<b>" + car.plate.toUpperCase() + "</b>";
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
function addWheels() {
    var wheel = []; //initialize var type class nad empty
    // getting wheels
    for (var i = 1; i <= 4; i++) {
        var brandW = document.querySelector('#brandInput' + i).value;
        var diamW = document.querySelector('#diamInput' + i).value;
        //Wheels diameter and brand validator
        if ((diamW < 0.4) && (brandW != "") || (diamW > 2) && (diamW != "")) {
            alert("El diámetro de la rueda" + i + "es incorrecto");
            return false;
        }
        // empty fields validator
        else if ((brandW == "") || (diamW == "")) {
            alert("Los campos no pueden quedar vacios");
            return false;
        }
        else {
            wheel[i - 1] = new Wheel(diamW, brandW); // create wheels in the array
        }
    }
    console.log(wheel);
    // form selector
    var formInput = document.getElementById("formInput");
    formInput.style.display = "none";
    var addWheels = document.getElementById("addWheels");
    addWheels.style.display = "none";
    var carCreatedTitle = document.getElementById("carCreatedTitle");
    carCreatedTitle.style.display = "none";
    var showCarCreated = document.getElementById("showCarCreated");
    showCarCreated.style.display = "block";
    //print Car data
    var pRes = document.getElementById("plateCreated");
    pRes.innerHTML = "Plate: " + "<b>" + car.plate.toUpperCase() + "</b>";
    var bRes = document.getElementById("brandCreated");
    bRes.innerHTML = "Brand: " + "<b>" + car.brand + "</b>";
    var cRes = document.getElementById("colorCreated");
    cRes.innerHTML = "Color: " + "<b>" + car.color + "</b>";
    // print wheels
    for (var i = 1; i <= 4; i++) { // cicling array with wheel[i-1].brand
        var bwRes = document.getElementById("brandOutput" + (i));
        bwRes.innerHTML = "Brand Wheel " + (i) + ": " + "<b>" + wheel[i - 1].brand + "</b>";
        var dwRes = document.getElementById("diamOutput" + (i));
        dwRes.innerHTML = "Diameter Wheel " + (i) + ": " + "<b>" + wheel[i - 1].diameter + "</b>";
    }
}
