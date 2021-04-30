//Contructor Funtion - naming style PascalCase
function CreateCircle(radius){
    this.radius = radius,
    this.draw = (x) => {
        console.log(x);
    }

}

/*
Every function is an Object in JS. We have various methods defined on functions
Internally this is how CreateCircle object works 
Every function calls Function Constructor to create object of that function
->

var circle = new Function('radius',`
    this.radius = radius,
    this.draw = (x) => {
        console.log(x);
    }
`);

console.log(new circle(1));
*/

//Every function is an Object in JS. We have various methods defined on functions
console.log(CreateCircle.constructor);
console.log(CreateCircle.arguments);

var p = new CreateCircle(2);
p.color="Blue" //Adding property externallly
console.log("Radius " + p.radius);
console.log(p);
p.draw("X " + 23);

console.log(p.constructor); // return  constructor info

let x = {} // this internally is let x = new Object(); Internally JS converts literals to Constructor. 
//Every object has some kind of constructor function
