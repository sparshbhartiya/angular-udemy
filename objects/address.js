var address = {
    street : "Ward 8",
    city : "Indore",
    zipCode : "455332"
};
function showAdress(address){
    for(let key in address){
        console.log(`${key} ${address[key]}`);
    }
}
showAdress(address);

function addressFactory(street,city,zipcode){
    return {
        street,
        city,
        zipcode
    };
}

function AddressConstructor(street,city,zipcode){
    this.street = street,
    this.city = city,
    this.zipCode = zipcode
}

console.log(addressFactory("Ab","Js",892232));
console.log(new AddressConstructor("dsj","dhwi",7899));