
let car: Car;
var plateRegEx = /^[0-9]{4}[a-zA-Z]{3}$/;
var diamRegEx = /^([0-9])*$/;


function createCar() {

   //  get car data
   var plate = document.getElementById("inputPlate") as HTMLInputElement;

   var brand = document.getElementById("inputBrand") as HTMLInputElement;

   var color = document.getElementById("inputColor") as HTMLInputElement;

   //empty field validator

   if(plate.value == ""||brand.value == ""||color.value == ""){
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



function addWheels(
) {
   //  get Wheels diameter
   let diamW1 = document.getElementById("diamInput1") as HTMLInputElement;
   let diamW2 = document.getElementById("diamInput2") as HTMLInputElement;
   let diamW3 = document.getElementById("diamInput3") as HTMLInputElement;
   let diamW4 = document.getElementById("diamInput4") as HTMLInputElement;

   let dw1 = parseFloat(diamW1.value);
   let dw2 = parseFloat(diamW2.value);
   let dw3 = parseFloat(diamW3.value);
   let dw4 = parseFloat(diamW4.value);

     //   get Wheels Brand

     let brandW1 = document.getElementById("brandInput1") as HTMLInputElement;
     let brandW2 = document.getElementById("brandInput2") as HTMLInputElement;
     let brandW3 = document.getElementById("brandInput3") as HTMLInputElement;
     let brandW4 = document.getElementById("brandInput4") as HTMLInputElement;


     let wheel1 = new Wheel(dw1, brandW1.value);
     let wheel2 = new Wheel(dw2, brandW2.value);
     let wheel3 = new Wheel(dw3, brandW3.value);
     let wheel4 = new Wheel(dw4, brandW4.value);


   // empty fields amd diameter validator
    
    if(brandW1.value == ""||brandW2.value == ""||brandW3.value == ""||brandW4.value == ""){
      alert("Los campos no pueden quedar vacios"); 
      return false;
    }else if (diamW1.value == "" || dw1 > 2 || dw1 < 0.4 || diamRegEx.test(diamW1.value)== false ) {
      alert("El diámetro de la rueda 1 es incorrecto");
      return false;
   } else if (diamW2.value == "" || dw2 > 2 || dw2 < 0.4||diamRegEx.test(diamW2.value)== false ) {
      alert("El diámetro de la rueda 2 es incorrecto");
      return false;
   } else if (diamW3.value == "" || dw3 > 2 || dw3 < 0.4 || diamRegEx.test(diamW3.value)== false) {
      alert("El diámetro de la rueda 3 es incorrecto");
      return false;
   } else if (diamW4.value == "" || dw4 > 2 || dw4 < 0.4 || diamRegEx.test(diamW4.value)== false) {
      alert("El diámetro de la rueda 4 es incorrecto");
      return false;
   } else {

      

    

      //    print wheels

      var bw1Res = document.getElementById("brandOutput1") as HTMLElement;
      bw1Res.innerHTML = "Brand Wheel 1: " + "<b>" + wheel1.brand + "</b>";

      var bw2Res = document.getElementById("brandOutput2") as HTMLElement;
      bw2Res.innerHTML = "Brand Wheel 2: " + "<b>" + wheel2.brand + "</b>";

      var bw3Res = document.getElementById("brandOutput3") as HTMLElement;
      bw3Res.innerHTML = "Brand Wheel 3: " + "<b>" + wheel3.brand + "</b>";

      var bw4Res = document.getElementById("brandOutput4") as HTMLElement;
      bw4Res.innerHTML = "Brand Wheel 4: " + "<b>" + wheel4.brand + "</b>";


      var dw1Res = document.getElementById("diamOutput1") as HTMLElement;
      dw1Res.innerHTML = "Diameter Wheel 1: " + "<b>" + wheel1.diameter + "</b>";

      var dw2Res = document.getElementById("diamOutput2") as HTMLElement;
      dw2Res.innerHTML = "Diameter Wheel 2: " + "<b>" + wheel2.diameter + "</b>";

      var dw3Res = document.getElementById("diamOutput3") as HTMLElement;
      dw3Res.innerHTML = "Diameter Wheel 3: " + "<b>" + wheel3.diameter + "</b>";

      var dw4Res = document.getElementById("diamOutput4") as HTMLElement;
      dw4Res.innerHTML = "Diameter Wheel 4: " + "<b>" + wheel4.diameter + "</b>";


      var pRes = document.getElementById("plateCreated") as HTMLElement;
      pRes.innerHTML = "Plate: " + "<b>" + car.plate.toUpperCase() + "</b>";

      var bRes = document.getElementById("brandCreated") as HTMLElement;
      bRes.innerHTML = "Brand: " + "<b>" + car.brand + "</b>";

      var cRes = document.getElementById("colorCreated") as HTMLElement;
      cRes.innerHTML = "Color: " + "<b>" + car.color + "</b>";

      // form selector

      let formInput = document.getElementById("formInput") as HTMLElement;
      formInput.style.display = "none";

      let addWheels = document.getElementById("addWheels") as HTMLElement;
      addWheels.style.display = "none";

      var carCreatedTitle = document.getElementById("carCreatedTitle") as HTMLElement;
      carCreatedTitle.style.display = "none";

      let showCarCreated = document.getElementById("showCarCreated") as HTMLElement;
      showCarCreated.style.display = "block";

   }

}
