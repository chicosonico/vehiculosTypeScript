
let car: Car;
var plateRegEx = /^[0-9]{4}[A-Z]{3}$/;


function createCar(){
  
   var plate = document.getElementById("inputPlate") as HTMLInputElement;

   var brand = document.getElementById("inputBrand") as HTMLInputElement;

   var color = document.getElementById("inputColor") as HTMLInputElement;

 
   if(plateRegEx.test(plate.value)){

    var formInput = document.getElementById("formInput") as HTMLElement;
    formInput.style.display = "none";
 
    var addWheels = document.getElementById("addWheels") as HTMLElement;
    addWheels.style.display = "block";
 
    var carCreatedTitle = document.getElementById("carCreatedTitle") as HTMLElement;
    carCreatedTitle.style.display = "block";
 
    car =new Car(plate.value, brand.value, color.value);
    console.log(car);
 
    var pRes = document.getElementById("plateRes") as HTMLElement;
    pRes.innerHTML = "Plate: " + "<b>" + car.plate + "</b>";
 
    var bRes = document.getElementById("brandRes") as HTMLElement;
    bRes.innerHTML = "Brand: " + "<b>" + car.brand + "</b>";
 
    var cRes = document.getElementById("colorRes") as HTMLElement;
    cRes.innerHTML = "Color: " + "<b>" + car.color + "</b>";

   }else{
 alert("Matrícula incorrecta");
  return false;
}

} 

// Plate validator

// function validarMatriculaEuropea_Exp(plateVal:string) {
 
//     return plateVal.match("^[0-9]{4}[A-Z]{3}$");
 
// }


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
  
}

