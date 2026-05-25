const accountId = 121232;
// const - change nahi kiya jata
let accountEmail = "shivam@google.com";
var accountPassword = "12345";
accountCity = "Gondia"
let accountState;// js will give it undefined

// accountId = 2
// console.log(accountId) - TypeError: Assignment to constant variable.

accountEmail = "hc@hc.com"
accountPassword = "1212121212"
accountCity = "bengaluru"

console.table([accountEmail,accountPassword,accountCity])

// preffer not to use var - because of issue in block scope and functional scope