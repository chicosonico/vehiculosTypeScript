
function createCar(plate:string,color:string,brand:string){
    let car=new Car(plate,color,brand);
    car.addWheel(new Wheel(2,"SEAT"));

    let formInput = document.getElementById("formInput") as HTMLElement;
   formInput.style.display = "none";

   let carCreated = document.getElementById("carCreated") as HTMLElement;
   carCreated.style.display = "block";

   let plateRes = document.getElementById("plateRes") as HTMLElement;
   plateRes.innerHTML = "Plate: " + car.plate ;

   let brandRes = document.getElementById("brandRes") as HTMLElement;
   brandRes.innerHTML = "Brand: " + car.brand ;

   let colorRes = document.getElementById("colorRes") as HTMLElement;
   colorRes.innerHTML = "Color: " + car.color ;
   
    // document.body.innerText="CAR: PLATE: " + car.plate 
    // + " COLOR: " + car.color + " BRAND: " + car.brand;
}

