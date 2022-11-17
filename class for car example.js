class Car {
    constructor(name, year) {
        this.name = name;
        this.model = year;
    };
    #defaultSpeed = '5mph';
    #boolmove = false;
    #movingSpeed = this.#defaultSpeed;
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
        console.log(`car has been started and moving with default Speed of `, this.#defaultSpeed);
        this.#boolmove = true;
    }

    changeDefaultSpeed(value) {
        this.#defaultSpeed = value;
        console.log('defaultSpeed changed to ', this.#defaultSpeed);
    }
}

let car1 = new Car('lamborghini', 2020);
console.log(car1);
car1.move()
car1.start()
car1.move()
car1.changeSpeed('10mph')
car1.move()
car1.stop()
car1.move()
car1.start()
car1.stop()
car1.move()
car1.changeDefaultSpeed('50mph')
car1.move()
car1.start()