"use strict";
function createCar(plate, color, brand) {
    var car = new Car(plate, color, brand);
    // car.addWheel(new Wheel(2,"SEAT"));
    var formInput = document.getElementById("formInput");
    formInput.style.display = "none";
    var addWheels = document.getElementById("addWheels");
    addWheels.style.display = "block";
    var pRes = document.getElementById("plateRes");
    pRes.innerHTML = "Plate: " + "<b>" + car.plate + "</b>";
    var bRes = document.getElementById("brandRes");
    bRes.innerHTML = "Brand: " + "<b>" + car.brand + "</b>";
    var cRes = document.getElementById("colorRes");
    cRes.innerHTML = "Color: " + "<b>" + car.color + "</b>";
    // document.body.innerText="CAR: PLATE: " + car.plate 
    // + " COLOR: " + car.color + " BRAND: " + car.brand;
}
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
    //    var plateRes2 = document.getElementById("plateRes2") as HTMLElement;
    //    plateRes2.innerHTML = "Plate: " + "<b>" + car.plateRes2 + "</b>";
    //    console.log(plateRes2);
    //    let wheel1diam = document.getElementById("diamWheel1") as HTMLElement;
    //    diamWheel1.innerHTML = "Diameter W 1: " + "<b>" + wheel1.diamWheel1 + "</b>";
    //    let brandRes = document.getElementById("brandRes") as HTMLElement;
    //    brandRes.innerHTML = "Brand: " + "<b>" + "Test" + "</b>";
    //    let colorRes = document.getElementById("colorRes") as HTMLElement;
    //    colorRes.innerHTML = "Color: " + "<b>" + car.color + "</b>";
}
//  var diamWheel1 = document.getElementById("diamWheel1").value; 
//     var diamWheel2 = document.getElementById("diamWheel2").value; 
//     var diamWheel3 = document.getElementById("diamWheel3").value; 
//     var diamWheel4 = document.getElementById("diamWheel4").value; 
//     var brandWheel1 = document.getElementById("brandWheel1").value; 
//     var brandWheel2 = document.getElementById("brandWheel2").value; 
//     var brandWheel3 = document.getElementById("brandWheel3").value; 
//     var brandWheel4 = document.getElementById("brandWheel4").value; 
//    car data incluida en adwheels function
//    var plateRes2 = document.getElementById("plateRes2") as HTMLElement;
//    plateRes2.innerHTML = "Plate: " + "<b>" + "test" + "</b>";
//    var brandRes2 = document.getElementById("brandRes2") as HTMLElement;
//    brandRes2.innerHTML = "Brand: " + "<b>" + "test" + "</b>";
//    var colorRes2 = document.getElementById("colorRes2") as HTMLElement;
//    colorRes2.innerHTML = "Color: " + "<b>" + "test" + "</b>";
// function showCarCreated(){
//    let formInput = document.getElementById("formInput") as HTMLElement;
//    formInput.style.display = "none";
//    let addWheels = document.getElementById("addWheels") as HTMLElement;
//    addWheels.style.display = "none";
//    let showCarCreated = document.getElementById("showCarCreated") as HTMLElement;
//    showCarCreated.style.display = "block";
// }
// let plateRes = document.getElementById("plateRes") as HTMLElement;
// plateRes.innerHTML = "Plate: " + "<b>" + car.plate + "</b>";
// let brandRes = document.getElementById("brandRes") as HTMLElement;
// brandRes.innerHTML = "Brand: " + "<b>" + car.brand + "</b>";
// let colorRes = document.getElementById("colorRes") as HTMLElement;
// colorRes.innerHTML = "Color: " + "<b>" + car.color + "</b>";
// Client code
// function createCar(plate:string,brand:string,color:string){
//     let car=new Car(plate,color,brand);
//     car.addWheel(new Wheel(2,"SEAT"));
//     document.body.innerText="CAR: PLATE: " + car.plate 
//     + " COLOR: " +car.color + " BRAND: " + brand 
//     + " WHEELS: " + JSON.stringify(car.wheels);
// }
