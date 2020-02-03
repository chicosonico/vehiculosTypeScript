
let car: Car;
var plateRegEx = /^[0-9]{4}[a-zA-Z]{3}$/;
var diamRegEx = /^([0-9])*$/;


function createCar() {

   //  get car data
   var plate = document.getElementById("inputPlate") as HTMLInputElement;

   var brand = document.getElementById("inputBrand") as HTMLInputElement;

   var color = document.getElementById("inputColor") as HTMLInputElement;

   //empty field validator

   if (plate.value == "" || brand.value == "" || color.value == "") {
      alert("Los campos no pueden quedar vacios");
      return false;
   }

   if (plateRegEx.test(plate.value)) { // plate format validator

      // form selector

      var formInput = document.getElementById("formInput") as HTMLElement;
      formInput.style.display = "none";

      var addWheels = document.getElementById("addWheels") as HTMLElement;
      addWheels.style.display = "block";

      var carCreatedTitle = document.getElementById("carCreatedTitle") as HTMLElement;
      carCreatedTitle.style.display = "block";

      //Car creator

      car = new Car(plate.value, brand.value, color.value);
      console.log(car);

      var pRes = document.getElementById("plateRes") as HTMLElement;
      pRes.innerHTML = "Plate: " + "<b>" + car.plate.toUpperCase() + "</b>";

      var bRes = document.getElementById("brandRes") as HTMLElement;
      bRes.innerHTML = "Brand: " + "<b>" + car.brand + "</b>";

      var cRes = document.getElementById("colorRes") as HTMLElement;
      cRes.innerHTML = "Color: " + "<b>" + car.color + "</b>";

   } else {
      alert("Matrícula incorrecta");
      return false;
   }

}



function addWheels() {
 var wheel: Wheel[] = []; //initialize var type class nad empty
      // getting wheels
   for (var i = 1; i <= 4; i++) {
      var brandW: any = (<HTMLInputElement>document.querySelector('#brandInput' + i)).value;
      var diamW: any = (<HTMLInputElement>document.querySelector('#diamInput' + i)).value;


      //Wheels diameter and brand validator
      if ((diamW < 0.4) && (brandW != "") || (diamW > 2) && (diamW != "")) {
         alert("El diámetro de la rueda" + i + "es incorrecto");
         return false;
      }

      // empty fields validator
      else if ((brandW == "") || (diamW == "")) {
         alert("Los campos no pueden quedar vacios");
         return false;
      }else{
        wheel[i-1] = new Wheel(diamW,brandW); // create wheels in the array
      }
    
   } console.log(wheel);

    // form selector
    let formInput = document.getElementById("formInput") as HTMLElement;
   formInput.style.display = "none";

   let addWheels = document.getElementById("addWheels") as HTMLElement;
   addWheels.style.display = "none";

   var carCreatedTitle = document.getElementById("carCreatedTitle") as HTMLElement;
   carCreatedTitle.style.display = "none";

   let showCarCreated = document.getElementById("showCarCreated") as HTMLElement;
   showCarCreated.style.display = "block";

   //print Car data
   var pRes = document.getElementById("plateCreated") as HTMLElement;
   pRes.innerHTML = "Plate: " + "<b>" + car.plate.toUpperCase() + "</b>";
   

   var bRes = document.getElementById("brandCreated") as HTMLElement;
   bRes.innerHTML = "Brand: " + "<b>" + car.brand + "</b>";

   var cRes = document.getElementById("colorCreated") as HTMLElement;
   cRes.innerHTML = "Color: " + "<b>" + car.color + "</b>";
 
   // print wheels

 for (var i = 1; i <= 4; i++) {// cicling array with wheel[i-1].brand
    
     
    
     var bwRes = document.getElementById("brandOutput"+ (i)) as HTMLElement;
      bwRes.innerHTML = "Brand Wheel " + (i) + ": " + "<b>" + wheel[i-1].brand + "</b>";
   
     var dwRes = document.getElementById("diamOutput"+ (i)) as HTMLElement;
      dwRes.innerHTML = "Diameter Wheel " + (i) + ": " + "<b>" + wheel[i-1].diameter + "</b>";
 }
 
}
