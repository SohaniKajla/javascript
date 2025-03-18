/////////////////////////////////////// ARITHMETIC OPERATORS ( **,*,/,%,+,-,++,--)//////////////////////////////
let x=4;
x= 100+20*3%x
console.log(x)
console.log("Increment & Decrement")
let num1=5;
let num2;
// num2=num1++;
num2=++num1;

console.log(`Num1=${num1} and Num2=${num2}`)
/////////////////////////////////////// ASSIGNMENT OPERATORS (+=,-=,/=,*=,%=,= , **=)////////////////////////

let y=3;
y+=40;
console.log(y)
////////////////////////////////////// COMPARISON oPERATOR (>,<,==,===,!=.!==,?,>=,<=)/////////////////////

// console.log(5==5);
// console.log(5=="5");
// console.log(5==8);

// console.log(5===5);
// console.log(5==="5");
// console.log(5===8);


console.log(5>=5);
console.log(5!=="5");
console.log(5<=8);

let name = null;
let text = "missing";
let result = name ?? text; ///////////   NULLISH OPERATOR (id first argument is not null or undefined it return first argument otherwise second argument)  /////////////
console.log(result)



let obj={
    
    age:98
}
console.log(obj?.name);  ///////////// OPTIONAL CHAINING OPERATOR (returns undefined if object is null or undefined)//////////////////////


/////////////////////////////////////////// STRING OPERATORS /////////////////////////////////////////////////
/// All the compariosn operator can be used in the string comparions operators(<,>,+=) ////
/// for concatenate use + operator////

///////////////////////////////////    LOGICAL OPERATOR   (&&,||,!) /////////////////////////////////////////'
let age =76;
if(age>=18&& age <=50){
    console.log("Then Person is a Worker")
}else{
    console.log("Vehla")
}


//////////////////////////////////// TYPE OPERATOR (typeof & instanceof) ////////////////////////////////////////////////
let date = new Date();
console.log(date)
console.log(date.getTime()); // Example: 1710801234567



////////////////////////////////// BITWISE OPERATOR ////////////////////////////////////////
let num = 4|8;
console.log(num.toString(2).padStart(8, "0"));

