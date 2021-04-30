//Factory Funtion - naming style camelCase

function createCircle(radius){
    return {
    radius,
    draw(){
        console.log("Hello");
    }
    };
}
var x = 79
createCircle(1);
//We can add property of an object dynamically 
//Here we have added a function dynamically to the object 'x'
x.area = (f) => {
    return f*f;
}
x.draw();
console.log(x);
console.log(x.area(20))
//We can delete property of an object using 'delete' keyword
delete x.area
//delete x.radius
console.log(x)
console.log(x.constructor); // return  default constructor new Object() if constructor not created explicitly