"use strict"; // treat entire code with neweer version of js

//DATATYPES

let name="Sohani"; //String
let age= 20;        //Number
let isLoggedIn= true    //boolean--> true/false

// bigint
// null --> Standalone value 
// undefined
// symbol --> using react, for component (for uniqueness)

// object-->


console.log(typeof 2);
console.log(typeof "sohani");
console.log(typeof null);
console.log(typeof undefined);


let array=[1,"sohani",true,[]]
console.log(typeof(array))

let num1=Number(prompt("Enter First Number:"));
let num2=Number(prompt("Enter Second Number"));
let Sum;
function test(num1,num2){
    Sum=num1+num2;
    return Sum;
}
console.log(test(num1,num2))
