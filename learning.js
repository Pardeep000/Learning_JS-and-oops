function Circle(rad){
    this.radius = rad;
    this.draw = function(){
        console.log(`circle is drawn of radius => ${rad}`);
    }
}

let c1 = new Circle(5);
c1.draw();
c1.location={
    x:5,
    y:2
}

// c1.draw = function(){
//     console.log(`circle is drawn with following parameters:\nradius = ${rad}\nlocation = ${x,y}`)
// }

console.log("circle object => ",c1);
// console.log(c1.keys())
console.log(Object.values(c1))


let obj = {
    name:"einstein",
    age:56
}


console.log(Object.keys(obj),'\n',Object.values(obj));