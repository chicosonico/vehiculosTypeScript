
let car: Car;
var plateRegEx = /^[0-9]{4}[A-Z]{3}$/;


function createCar(){
  
   var plate = document.getElementById("inputPlate") as HTMLInputElement;

   var brand = document.getElementById("inputBrand") as HTMLInputElement;

   var color = document.getElementById("inputColor") as HTMLInputElement;

//    if(plateRegEx.test(plate.value)){
   if("1234asd" == plate.value){

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
    ){
    

// view selector

  



//  get Wheels diameter
   let diamW1 = document.getElementById("diamInput1") as HTMLElement;
   let diamW2 = document.getElementById("diamInput2") as HTMLElement;
   let diamW3 = document.getElementById("diamInput3") as HTMLElement;
   let diamW4 = document.getElementById("diamInput4") as HTMLElement;
  
//   get Wheels Brand

   let brandW1 = document.getElementById("brandInput1") as HTMLElement;
   let brandW2 = document.getElementById("brandInput2") as HTMLElement;
   let brandW3 = document.getElementById("brandInput3") as HTMLElement;
   let brandW4 = document.getElementById("brandInput4") as HTMLElement;

   let wheel1 = new Wheel(diamW1.value, brandW1.value);
   let wheel2 = new Wheel(diamW2.value, brandW2.value);
   let wheel3 = new Wheel(diamW3.value, brandW3.value);
   let wheel4 = new Wheel(diamW4.value, brandW4.value);
   

//    print wheels
   let diamW1 = document.getElementById("diamInput1") as HTMLElement;
   diamW1.innerHTML = "Diameter W 1: " + "<b>" + wheel1.diameter + "</b>";
   
   diamW2.innerHTML = "Diameter W 2: " + "<b>" + wheel2.diameter + "</b>";
   diamW2.innerHTML = "Diameter W 2: " + "<b>" + wheel2.diameter + "</b>";
   diamW4.innerHTML = "Diameter W 4: " + "<b>" + wheel4.diameter + "</b>";

   brandW1.innerHTML = "Brand W 1: " + "<b>" + wheel1.brand + "</b>";
   brandW2.innerHTML = "Brand W 2: " + "<b>" + wheel2.brand + "</b>";
   brandW3.innerHTML = "Brand W 3: " + "<b>" + wheel3.brand + "</b>";
   brandW4.innerHTML = "Brand W 4: " + "<b>" + wheel4.brand + "</b>";

   let formInput = document.getElementById("formInput") as HTMLElement;
   formInput.style.display = "none";

   let addWheels = document.getElementById("addWheels") as HTMLElement;
   addWheels.style.display = "none";

   let showCarCreated = document.getElementById("showCarCreated") as HTMLElement;
   showCarCreated.style.display = "block";
 
}

