
function createCar(plate:string,color:string,brand:string){
    let car=new Car(plate,color,brand);
    car.addWheel(new Wheel(2,"SEAT"));
    let formInput = document.getElementById("formInput") as HTMLElement;
   formInput.style.display = "none";
    // document.body.innerText="CAR: PLATE: " + car.plate 
    // + " COLOR: " + car.color + " BRAND: " + car.brand;
}

