class Car {

    static announcement() {
        console.log('new model');
        this.name = "Bugatti";
        // this.model = '2022';
    }


    constructor(name, year) {
        this.name = name;
        this.model = year;
    };
    #defaultSpeed = '5mph';
    #boolmove = false;
    #movingSpeed = this.#defaultSpeed;
    //
    get _defaultSpeed() {
        return this.#defaultSpeed;
    }
    set _defaultSpeed(value) {
        this.#defaultSpeed = value;
    }
    //
    move(speed) {
        if (this.#boolmove == false) console.log('car is not moving, first you have to start it...');
        else console.log('car is moving at ', this.#movingSpeed);
    }
    changeSpeed(value) {
        this.#movingSpeed = value;
        console.log('car speed is changed to ', this.#movingSpeed);
    }
    stop() {
        this.#boolmove = false;
        this.#movingSpeed = '0mph';
        console.log('car is stopped');
    }
    start() {
        if (this.#boolmove == false) {
            console.log(`car has been started and moving with default Speed of `, this.#defaultSpeed);
            this.#boolmove = true;
            this.#movingSpeed = this.#defaultSpeed;
        }
        else {
            console.log(`car is already moving at `, this.#defaultSpeed);
        }
    }

    changeDefaultSpeed(value) {
        this.#defaultSpeed = value;
        console.log('defaultSpeed changed to ', this.#defaultSpeed);
    }
}

let car1 = new Car('lamborghini', 2020);
car1.start()
car1.stop()
car1._defaultSpeed = '18mph'
car1.start()
car1.move()
car1.start()
car1.stop()
car1.move()
car1.start()


Car.announcement();
// console.log(car1.name);