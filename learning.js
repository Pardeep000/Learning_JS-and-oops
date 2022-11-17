function Circle(rad) {
    this.radius = rad;
    this.draw = function () {
        console.log('circle is drawn...\n');
    };
    //
    let defaultLocation = { x: 1, y: 1 }
    //
    this.showDefaultLocation = function () {
        console.log(defaultLocation);
    }
    Object.defineProperty(this, 'location', {
        get: function () {
            console.log(defaultLocation);
            // return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y) {
                throw new Error("invalid location")
            }
            defaultLocation = value;
        }
    });
}


let c1 = new Circle(5);

c1.draw();
// c1.showDefaultLocation();
// console.log(c1.location);
let value = { x: 5, y: 2 };
c1.location = value;
c1.location;