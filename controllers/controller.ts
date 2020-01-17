
function createCar(plate:string,color:string,brand:string){
    let car=new Car(plate,color,brand);
    car.addWheel(new Wheel(2,"SEAT"));

    let formInput = document.getElementById("formInput") as HTMLElement;
   formInput.style.display = "none";

   let addWheels = document.getElementById("addWheels") as HTMLElement;
   addWheels.style.display = "block";

   let plateRes = document.getElementById("plateRes") as HTMLElement;
   plateRes.innerHTML = "Plate: " + "<b>" + car.plate + "</b>";

   let brandRes = document.getElementById("brandRes") as HTMLElement;
   brandRes.innerHTML = "Brand: " + "<b>" + car.brand + "</b>";

   let colorRes = document.getElementById("colorRes") as HTMLElement;
   colorRes.innerHTML = "Color: " + "<b>" + car.color + "</b>";
   
    // document.body.innerText="CAR: PLATE: " + car.plate 
    // + " COLOR: " + car.color + " BRAND: " + car.brand;
}

