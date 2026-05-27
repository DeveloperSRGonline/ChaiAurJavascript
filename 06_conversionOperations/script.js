let score = 33;
console.log(typeof score); // number
console.log(typeof(score)); // number

// let stringScore = "33";
// let withabcScore = "33abc";
// let nullScore = null;
// let booleanScore = null;

console.log(typeof stringScore); // string
console.log(typeof(stringScore)); // string

let valueInNumber = Number(stringScore)
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN

// string , true, null , NaN, undefined, all these if converted to number becomes NaN

// 1 -> true, 0 -> false
// "" -> false
// "shivam" -> true