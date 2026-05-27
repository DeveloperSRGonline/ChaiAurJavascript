// "use strict"; // treat all JS code as newer version - no need now days

// alert(3+3) - not using browser using node js
// redable ,mmaintainable
// console.log(3
//     + 3); - this is not good practice
console.log("Shivam");

let name = "shivam"; // string
let age = 22; // number
let isLoggedIn = false; // boolean - true or false

// null - standalone value (empty value) intentionally puted
// undefined - value not defined yet

// symbol - for uniqueness

// object - non primitive data type
// typeof - to check the type of data type

console.log(typeof null); // object
console.log(typeof undefined); // undefined

/* In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the typeof return value "object". */
