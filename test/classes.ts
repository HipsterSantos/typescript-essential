
class Car {
    engineName: string;
    gears: number;
    private speed: number;

    constructor(speed:number){
        this.speed = speed || 0;
    }

    accelerate(): void{
        this.speed++;
    }

    throttle(): void{
       this.speed--;
    }

    getSpeed(): void{
        console.log(this.speed);
    }

    static numberOfWheels(): number{
        return 4;
    }
}

// now is time to instatiate car class 

let car = new Car(4);
Car.numberOfWheels();