//Object
var car = {
    name: "Honda Civic",
    color: "Black",
    model: "1.8oriel"
};
console.log(car);
console.log(car.name); //Honda Civic
console.log(car["name"]); //Honda Civic
// . Create a new myCar object for a car. Add some properties, including, but not 
// limited to, make and model, and values for a typical car or your car. Feel free 
// to use booleans, strings, or numbers.
var mycar_Inshallah = {
    name: "Markx",
    model: 2012,
    color: "white",
    driven: true,
    sound: "rataatattatttaaaaa!"
};
console.log(mycar_Inshallah);
var variable = "color";
variable = (["Black"])[0];
console.log(variable);
console.log(mycar_Inshallah.sound);
//objects in objects
var company = { companyName: "Aquafina",
    activity: "Supply Pure & Healthy Water",
    address: {
        street: "2nd street",
        number: "65 Block C",
        city: "Karachi",
        state: "Pakistan"
    },
    establishmentOfYear: 2004
};
console.log(company);
console.log(company.address.city = "umarkot"); //change value Umarkot
console.log(company["address"]["number"] = "food supplying"); //food supplying
//objects in arrays
var my_addresess = [{
        adress: "Morand Patu",
        deh: "Ahori Farm",
        uc: "Kharoro Syed",
        distrct: "Umarkot",
    },
    {
        adress: "Khyber Tikka Restuarent",
        street: " 1 Block C",
        area: "Gulshan e Jamal",
        city: "Karachi",
        state: "Pakistan",
    }];
console.log(my_addresess);
console.log(my_addresess[0].adress); // Morand Patu, in 0 index print will all data of 1st objct
console.log(my_addresess[1].adress);
// 1. Create an object named people that contains an empty array that is called 
// friends.
// 2. Create three variables, each containing an object, that contain one of your 
// friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.
// 4. Output it to the console.
var people = {
    //friends:[]
    friends: ["Sadiq", "Jabir", "Hamzah"]
};
console.log(people);
var myFriend = {};
var mybestfriend = {};
var my_bro = {
    name: "Sadiq Iqbal Rajar",
    lastName: "Ali",
    Id: "pichwary py ak till hai"
};
console.log(my_bro);
//test QNAs
var msg1 = 'hello';
var msg2 = msg1.slice(-1);
console.log(msg2 ? msg2 : msg2 + msg1);
var x = false || true;
var y = "true" && "false";
var z = false && true;
console.log("".concat(x, " ").concat(y, " ").concat(z));
var a = true && 20;
var b = 0 || 20;
var c = 0 && 20;
console.log("".concat(a, " ").concat(b, " ").concat(c));
var xy = [10, 20, 30, 40];
var y1 = [50, 60];
xy.reverse().push();
console.log(xy.length);
var route = { distance: 131, elevation: 1.4 };
for (var k in route)
    console.log(k);
var abc = function (n) {
    return n > 2 ? n * abc(n - 1) : 2;
};
console.log(abc(6));
var xn = mult(2)(10);
console.log(xn);
