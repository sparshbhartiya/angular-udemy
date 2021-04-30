/* Hoisting - Moving declarations to top of code
Initialization of variables declared using "var" is possible before declaration of that variable

x = 20; // Works fine
console.log(x);
var x;
y =10; // Gives error ReferenceError: Cannot access 'y' before initialization
console.log(y);
let y;
show(20);  //Works fine
function show(num){
    console.log(20);
}
*/

const courses = [
    {id:1,author:"a"},
    {id:2,author:"b"}
];
let c = courses.find(function(course){
    return course.author === "a";
});
//Rewrite above function using arrow operator 
//let c = courses.find(course => course.author==='a');
let index = courses.findIndex(function(course){
    return course.author === "a";
});
console.log(c);
console.log(index);
