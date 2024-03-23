// primitive --> call by value--> not original copy of the varaible
// 7 types :String,Number,Boolean,Null--> empty, Undefined--> no value nut variable declared, Symbol--> to make to any variable , BigInt


const score = 100
const str= "123"
const isBoolean = true
const outside = null
const id= Symbol('123')
let userid;

console.log(typeof score);
console.log(typeof str);
console.log(typeof isBoolean);
console.log(typeof outside);
console.log(typeof id);
console.log(typeof userid);
 
 
//Reference (Non primitve) --> direct memory allocation
// Array, Objects, Functions
 

const heros=["shaktiman","doga"]
let myObj={
    name:"sohani",
    age:14,
}

const myFunction=function (){
    console.log("Hello World")
}

console.log(typeof myObj);


