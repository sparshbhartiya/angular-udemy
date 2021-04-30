const circle = {
    radius:1,
    draw() {
        console.log("Draw");
    }
};

for(let key in circle){
    console.log("in "+key)
    console.log("in "+circle[key])
}
for(let key of Object.keys(circle)){
    console.log("of keys "+key)
}
for(let entry of Object.entries(circle)){
    console.log("of entry " + entry)
}