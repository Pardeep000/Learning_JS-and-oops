function createCircle(radius,x,y){
    return {
        radius:radius,
        location:{
            x:x,//just x
            y:y,// just y
        },
        draw:function(){
            console.log(`circle is drawn with features\nradius= ${radius} and point coordinates=${x,y}`)
        }
    }
}


let circle = createCircle(2,1,1);
circle.draw();