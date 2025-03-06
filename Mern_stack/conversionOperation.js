let marks = "34aa";

console.log(typeof(marks));

let valueInNumber = Number(marks);
console.log(typeof (valueInNumber));
console.log(valueInNumber);

// if(valueInNumber== Number){
//     console.log(valueInNumber)
// }else{
//     console.log("Not a Number") //isNaN operation
// }

console.log(typeof NaN);


let LoggedIn =1;
let booleanLoggesIn = Boolean(LoggedIn);
console.log(booleanLoggesIn);

// 1--> true. 0--> false , number can be any
// "sohani" --> true
// "" or only declare --> false



let a=12;
const y=a++;
console.log(`a:${a}, y:${y}`)