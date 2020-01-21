
function createCar(plate:string,color:string,brand:string){
    var car =new Car(plate,color,brand);
    // car.addWheel(new Wheel(2,"SEAT"));

   var formInput = document.getElementById("formInput") as HTMLElement;
   formInput.style.display = "none";

   var addWheels = document.getElementById("addWheels") as HTMLElement;
   addWheels.style.display = "block";

   var pRes = document.getElementById("plateRes") as HTMLElement;
   pRes.innerHTML = "Plate: " + "<b>" + car.plate + "</b>";

   var bRes = document.getElementById("brandRes") as HTMLElement;
   bRes.innerHTML = "Brand: " + "<b>" + car.brand + "</b>";

   var cRes = document.getElementById("colorRes") as HTMLElement;
   cRes.innerHTML = "Color: " + "<b>" + car.color + "</b>";
   
    // document.body.innerText="CAR: PLATE: " + car.plate 
    // + " COLOR: " + car.color + " BRAND: " + car.brand;
}


function addWheels(
    diamWheel1:number, diamWheel2:number, diamWheel3:number, diamWheel4:number,
    brandWheel1:string, brandWheel2:string, brandWheel3:string, brandWheel4:string
    ){
    
    let wheel1 = new Wheel(diamWheel1, brandWheel1);
    let wheel2 = new Wheel(diamWheel2, brandWheel2);
    let wheel3 = new Wheel(diamWheel3, brandWheel3);
    let wheel4 = new Wheel(diamWheel4, brandWheel4);

// view selector

    let formInput = document.getElementById("formInput") as HTMLElement;
   formInput.style.display = "none";

   let addWheels = document.getElementById("addWheels") as HTMLElement;
   addWheels.style.display = "none";

   let showCarCreated = document.getElementById("showCarCreated") as HTMLElement;
   showCarCreated.style.display = "block";



//  Wheels diameter
   let diamW1 = document.getElementById("diamW1") as HTMLElement;
   diamW1.innerHTML = "Diameter W 1: " + "<b>" + wheel1.diameter + "</b>";
   console.log(wheel1);

   let diamW2 = document.getElementById("diamW2") as HTMLElement;
   diamW2.innerHTML = "Diameter W 2: " + "<b>" + wheel2.diameter + "</b>";
   console.log(wheel2);

   let diamW3 = document.getElementById("diamW3") as HTMLElement;
   diamW3.innerHTML = "Diameter W 3: " + "<b>" + wheel3.diameter + "</b>";
   console.log(wheel3);

   let diamW4 = document.getElementById("diamW4") as HTMLElement;
   diamW4.innerHTML = "Diameter W 4: " + "<b>" + wheel4.diameter + "</b>";
   console.log(wheel4);

//    Wheels Brand

   let brandW1 = document.getElementById("brandW1") as HTMLElement;
   brandW1.innerHTML = "Brand W 1: " + "<b>" + wheel1.brand + "</b>";
   

   let brandW2 = document.getElementById("brandW2") as HTMLElement;
   brandW2.innerHTML = "Brand W 2: " + "<b>" + wheel2.brand + "</b>";
  

   let brandW3 = document.getElementById("brandW3") as HTMLElement;
   brandW3.innerHTML = "Brand W 3: " + "<b>" + wheel3.brand + "</b>";
  

   let brandW4 = document.getElementById("brandW4") as HTMLElement;
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

