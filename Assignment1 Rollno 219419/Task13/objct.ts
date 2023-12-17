//Object

let car={
    name: "Honda Civic",
    color: "Black",
    model: "1.8oriel"
}
console.log(car)
console.log(car.name);//Honda Civic
console.log(car["name"]);//Honda Civic

// . Create a new myCar object for a car. Add some properties, including, but not 
// limited to, make and model, and values for a typical car or your car. Feel free 
// to use booleans, strings, or numbers.

let mycar_Inshallah={
    name: "Markx",
    model: 2012,
    color: "white",
    driven: true,
    sound: "rataatattatttaaaaa!"
}
console.log(mycar_Inshallah);
let variable="color";
[variable]=(["Black"])
console.log(variable)
console.log(mycar_Inshallah.sound)

//objects in objects

let company={ companyName: "Aquafina",
   activity: "Supply Pure & Healthy Water",
   address:{
     street: "2nd street",
      number:"65 Block C",
      city: "Karachi",
      state: "Pakistan"
   },
   establishmentOfYear: 2004
};
console.log(company);
console.log(company.address.city="umarkot");//change value Umarkot
console.log(company["address"]["number"]="food supplying");//food supplying

//objects in arrays

let my_addresess=[{
    adress:"Morand Patu",
    deh:"Ahori Farm",
    uc:"Kharoro Syed",
    distrct:"Umarkot",
    
},
    {
    adress: "Khyber Tikka Restuarent",
    street: " 1 Block C",
    area: "Gulshan e Jamal",     
    city:"Karachi",
    state:"Pakistan",
    
}];
console.log(my_addresess);
console.log(my_addresess[0].adress);// Morand Patu, in 0 index print will all data of 1st objct
console.log(my_addresess[1].adress)

// 1. Create an object named people that contains an empty array that is called 
// friends.
// 2. Create three variables, each containing an object, that contain one of your 
// friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.
// 4. Output it to the console.

let people={ 
    //friends:[]
    friends:["Sadiq","Jabir","Hamzah"] 
}
console.log(people);
    let myFriend={
        
    }
    let mybestfriend={

    }
 let my_bro={
    name: "Sadiq Iqbal Rajar",
    lastName: "Ali",
    Id: "pichwary py ak till hai"
 }
console.log(my_bro);

//test QNAs
let msg1 = 'hello';
let msg2 = msg1.slice(-1);
console.log(msg2 ? msg2 : msg2 + msg1)

let x = false || true;
let y = "true" && "false";
let z = false && true;
console.log(`${x} ${y} ${z}`);

let a = true && 20;
let b = 0 || 20
let c = 0 && 20;
console.log(`${a} ${b} ${c}`);

let xy = [10, 20, 30, 40];
let y1= [50, 60];
xy.reverse().push();
console.log(xy.length);

let route = {distance: 131, elevation: 1.4};
for (let k in route) console.log(k);


//Product Catalog

const inventry=([{
    
    name: "Bag",
    model: "zipper",
    cost: 3999,
    quantity: 5,
}]);
console.log(inventry);

//self-check quiz
const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0));
console.log(myArr1.indexOf(3));

const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2);
console.log(myArr2[2]);

const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]);
    


