"use strict";
var car;
var plateRegEx = /^[0-9]{4}[A-Z]{3}$/;
function createCar() {
    var plate = document.getElementById("inputPlate");
    var brand = document.getElementById("inputBrand");
    var color = document.getElementById("inputColor");
    //    if(plateRegEx.test(plate.value)){
    if ("1234asd" == plate.value) {
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
function addWheels() {
    // view selector
    //  get Wheels diameter
    var diamW1 = document.getElementById("diamInput1");
    var diamW2 = document.getElementById("diamInput2");
    var diamW3 = document.getElementById("diamInput3");
    var diamW4 = document.getElementById("diamInput4");
    //   get Wheels Brand
    var brandW1 = document.getElementById("brandInput1");
    var brandW2 = document.getElementById("brandInput2");
    var brandW3 = document.getElementById("brandInput3");
    var brandW4 = document.getElementById("brandInput4");
    var wheel1 = new Wheel(diamW1.value, brandW1.value);
    var wheel2 = new Wheel(diamW2.value, brandW2.value);
    var wheel3 = new Wheel(diamW3.value, brandW3.value);
    var wheel4 = new Wheel(diamW4.value, brandW4.value);
    //    print wheels
    var diamW1 = document.getElementById("diamInput1");
    diamW1.innerHTML = "Diameter W 1: " + "<b>" + wheel1.diameter + "</b>";
    diamW2.innerHTML = "Diameter W 2: " + "<b>" + wheel2.diameter + "</b>";
    diamW2.innerHTML = "Diameter W 2: " + "<b>" + wheel2.diameter + "</b>";
    diamW4.innerHTML = "Diameter W 4: " + "<b>" + wheel4.diameter + "</b>";
    brandW1.innerHTML = "Brand W 1: " + "<b>" + wheel1.brand + "</b>";
    brandW2.innerHTML = "Brand W 2: " + "<b>" + wheel2.brand + "</b>";
    brandW3.innerHTML = "Brand W 3: " + "<b>" + wheel3.brand + "</b>";
    brandW4.innerHTML = "Brand W 4: " + "<b>" + wheel4.brand + "</b>";
    var formInput = document.getElementById("formInput");
    formInput.style.display = "none";
    var addWheels = document.getElementById("addWheels");
    addWheels.style.display = "none";
    var showCarCreated = document.getElementById("showCarCreated");
    showCarCreated.style.display = "block";
}
