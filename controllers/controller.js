"use strict";
var car;
var plateRegEx = /^[0-9]{4}[a-zA-Z]{3}$/;
function createCar() {
    //  get car data
    var plate = document.getElementById("inputPlate");
    var brand = document.getElementById("inputBrand");
    var color = document.getElementById("inputColor");
    if (plateRegEx.test(plate.value)) { // plate format validator
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
function addWheels() {
    //  get Wheels diameter
    var diamW1 = document.getElementById("diamInput1");
    var diamW2 = document.getElementById("diamInput2");
    var diamW3 = document.getElementById("diamInput3");
    var diamW4 = document.getElementById("diamInput4");
    var dw1 = parseFloat(diamW1.value);
    var dw2 = parseFloat(diamW2.value);
    var dw3 = parseFloat(diamW3.value);
    var dw4 = parseFloat(diamW4.value);
    // diameter validator
    if (dw1 > 2 || dw1 < 0.4) {
        alert("El diámetro de la rueda 1 es incorrecto");
        return false;
    }
    else if (dw2 > 2 || dw2 < 0.4) {
        alert("El diámetro de la rueda 2 es incorrecto");
        return false;
    }
    else if (dw3 > 2 || dw3 < 0.4) {
        alert("El diámetro de la rueda 3 es incorrecto");
        return false;
    }
    else if (dw4 > 2 || dw4 < 0.4) {
        alert("El diámetro de la rueda 4 es incorrecto");
        return false;
    }
    else {
        //   get Wheels Brand
        var brandW1 = document.getElementById("brandInput1");
        var brandW2 = document.getElementById("brandInput2");
        var brandW3 = document.getElementById("brandInput3");
        var brandW4 = document.getElementById("brandInput4");
        var wheel1 = new Wheel(dw1, brandW1.value);
        var wheel2 = new Wheel(dw2, brandW2.value);
        var wheel3 = new Wheel(dw3, brandW3.value);
        var wheel4 = new Wheel(dw4, brandW4.value);
        //    print wheels
        var bw1Res = document.getElementById("brandOutput1");
        bw1Res.innerHTML = "Brand Wheel 1: " + "<b>" + wheel1.brand + "</b>";
        var bw2Res = document.getElementById("brandOutput2");
        bw2Res.innerHTML = "Brand Wheel 2: " + "<b>" + wheel2.brand + "</b>";
        var bw3Res = document.getElementById("brandOutput3");
        bw3Res.innerHTML = "Brand Wheel 3: " + "<b>" + wheel3.brand + "</b>";
        var bw4Res = document.getElementById("brandOutput4");
        bw4Res.innerHTML = "Brand Wheel 4: " + "<b>" + wheel4.brand + "</b>";
        var dw1Res = document.getElementById("diamOutput1");
        dw1Res.innerHTML = "Diameter Wheel 1: " + "<b>" + wheel1.diameter + "</b>";
        var dw2Res = document.getElementById("diamOutput2");
        dw2Res.innerHTML = "Diameter Wheel 2: " + "<b>" + wheel2.diameter + "</b>";
        var dw3Res = document.getElementById("diamOutput3");
        dw3Res.innerHTML = "Diameter Wheel 3: " + "<b>" + wheel3.diameter + "</b>";
        var dw4Res = document.getElementById("diamOutput4");
        dw4Res.innerHTML = "Diameter Wheel 4: " + "<b>" + wheel4.diameter + "</b>";
        var pRes = document.getElementById("plateCreated");
        pRes.innerHTML = "Plate: " + "<b>" + car.plate + "</b>";
        var bRes = document.getElementById("brandCreated");
        bRes.innerHTML = "Brand: " + "<b>" + car.brand + "</b>";
        var cRes = document.getElementById("colorCreated");
        cRes.innerHTML = "Color: " + "<b>" + car.color + "</b>";
        // form selector
        var formInput = document.getElementById("formInput");
        formInput.style.display = "none";
        var addWheels_1 = document.getElementById("addWheels");
        addWheels_1.style.display = "none";
        var carCreatedTitle = document.getElementById("carCreatedTitle");
        carCreatedTitle.style.display = "none";
        var showCarCreated = document.getElementById("showCarCreated");
        showCarCreated.style.display = "block";
    }
}
