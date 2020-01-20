
function createCar(plate:string,color:string,brand:string){
    var car =new Car(plate,color,brand);
    // car.addWheel(new Wheel(2,"SEAT"));

    let formInput = document.getElementById("formInput") as HTMLElement;
   formInput.style.display = "none";

   let addWheels = document.getElementById("addWheels") as HTMLElement;
   addWheels.style.display = "block";

  var plateRes = document.getElementById("plateRes") as HTMLElement;
   plateRes.innerHTML = "Plate: " + "<b>" + car.plate + "</b>";

   let brandRes = document.getElementById("brandRes") as HTMLElement;
   brandRes.innerHTML = "Brand: " + "<b>" + car.brand + "</b>";

   let colorRes = document.getElementById("colorRes") as HTMLElement;
   colorRes.innerHTML = "Color: " + "<b>" + car.color + "</b>";
   
    // document.body.innerText="CAR: PLATE: " + car.plate 
    // + " COLOR: " + car.color + " BRAND: " + car.brand;
}


function addWheels(
    diamWheel1:number, diamWheel2:number, diamWheel3:number, diamWheel4:number,
    brandWheel1:string, brandWheel2:string, brandWheel3:string, brandWheel4:string,){
    
    let wheel1 = new Wheel(diamWheel1, brandWheel1);
    let wheel2 = new Wheel(diamWheel2, brandWheel2);
    let wheel3 = new Wheel(diamWheel3, brandWheel3);
    let wheel4 = new Wheel(diamWheel4, brandWheel4);

    let formInput = document.getElementById("formInput") as HTMLElement;
   formInput.style.display = "none";

   let addWheels = document.getElementById("addWheels") as HTMLElement;
   addWheels.style.display = "none";

   let showCarCreated = document.getElementById("showCarCreated") as HTMLElement;
   showCarCreated.style.display = "block";

   let diamW4 = document.getElementById("diamWheel4") as HTMLElement;
   diamW4.innerHTML = "Diameter W 4: " + "<b>" + wheel4.diameter + "</b>";
   console.log(wheel4);
   

   let plateRes2 = document.getElementById("plateRes2") as HTMLElement;
   plateRes2.innerHTML = "Plate: " + "<b>" + car.plateRes2 + "</b>";
   console.log(plateRes2);

//    let wheel1diam = document.getElementById("diamWheel1") as HTMLElement;
//    diamWheel1.innerHTML = "Diameter W 1: " + "<b>" + wheel1.diamWheel1 + "</b>";

//    let brandRes = document.getElementById("brandRes") as HTMLElement;
//    brandRes.innerHTML = "Brand: " + "<b>" + "Test" + "</b>";

//    let colorRes = document.getElementById("colorRes") as HTMLElement;
//    colorRes.innerHTML = "Color: " + "<b>" + car.color + "</b>";
}






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

