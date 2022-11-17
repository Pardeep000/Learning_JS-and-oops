//By constructor function
function Circle(rad){
    this.radius = rad;
    this.draw = function(){
        console.log(`circle drawn with radius => ${rad}`);
    }
}

let circle = new Circle(5);
console.log(circle.draw());


// //By factory function
// function createCircle(radius, x, y) {
//     return {
//         radius: radius,
//         location: {
//             x: x,//just x
//             y: y,// just y
//         },
//         draw: function () {
//             console.log(`circle is drawn with features\nradius= ${radius} and point coordinates=${x, y}`)
//         }
//     }
// }


// let circle = createCircle(2, 1, 1);
// circle.draw();


// //By literal notation
// const circle = {
//     radius: 2,
//     location: {
//         x: 1,
//         y: 2
//     },
//     draw: function () {
//         console.log(`circle is drawn with features\nradius= ${this.radius} and point coordinates=${this.x, this.y}`)
//     }
// }

// circle.draw();

