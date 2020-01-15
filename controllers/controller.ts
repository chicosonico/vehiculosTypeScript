
function createCar(plate:string,color:string,brand:string){
    let car=new Car(plate,color,brand);
    car.addWheel(new Wheel(2,"SEAT"));
    document.body.innerText="CAR: PLATE: " + car.plate 
    + " COLOR: " + car.color + " BRAND: " + car.brand 
    + " WHEELS: " + car.wheels;
}

