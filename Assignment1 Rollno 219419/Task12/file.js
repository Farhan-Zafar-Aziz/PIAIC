"use strict";
// //1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and 
// "Apples."
// 2. Check your list length in the console.
// 3. Update "Bread" to "Bananas."
// 4. Output your entire list to the console.
// let shopping = ["Milk", "Bread", "Apples"];
// console.log(shopping.length); //3
// shopping[1] = "Bananas";
// console.log(shopping); //[ 'Milk', 'Bananas', 'Apples' ]
//length method
let cars = ["honda", "toyota", "kia", "bmw", "audi"];
cars.length;
cars.splice(2, 2, "wolksvegon");
cars.push("mercedeez");
cars.pop();
let caar = ["thar", "scorpyo", "jeep", "jimny"];
let gaari = caar.concat(cars);
//console.log(gaari)
let caru = caar.lastIndexOf("jimny");
let car = cars.concat("thar", "scorpyo"); //concat in array using variable
console.log(car);
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = arr1.concat(arr2);
//arr3.shift();//delete 1
let arr4 = arr1.indexOf(6, 1);
console.log(arr4); // [ 1, 2, 3, 4, 5, 6,7,8,9,10 ]
//. Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list.
// 3. Update "Bread" with Bananas and Eggs.
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk.
// 7. After Bananas, add Carrots and Lettuce.
// 8. Create a new list containing Juice and Pop.
// 9. Combine both lists, adding the new list twice to the end of the first list.
// 10. Get the last index value of Pop and output it to the console.
// 11. Your final list should look like this:
let shopping = ["milk", "bread", "apples"];
shopping.splice(0, 3); //[]
shopping.splice(3, 0, "milk", "bread", "apples");
shopping[1] = "bananas, eggs"; // [ 'milk', 'bananas, eggs', 'apples' ]
shopping.pop();
shopping.sort();
console.log(shopping[1]);
shopping.splice(1, 0, "carrots", "lectuce");
let newList = ["juice", "popcorn"];
//let shoping = ["milk","bread","apples"];
let addList = newList.concat(shopping);
addList.pop();
console.log(addList);
console.log(shopping);
//multidimensional aarays
// 1. Create an array containing three values: 1, 2, and 3.
//2. Nest the original array into a new array three times.
//3. Output the value 2 from one of the arrays into the console.
let dishes = [1, 2, 3];
let newArry = [4, 5, 6];
let nestArry = [dishes, newArry];
console.log(nestArry[0][1]); //2
console.log(nestArry); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
