let myArr = [1,2,5,6,4,8,9]

// myArr.push(10);
// myArr.pop();
// myArr.unshift(12);
// myArr.shift();

const newArr = myArr.join();
console.log(newArr);   //////////////// TYPE STRING
console.log(myArr);

console.log(myArr.includes(4));
console.log(myArr.indexOf(6))



//////////// SLICE SPLICE     
console.log("A",myArr);
const myn1 = myArr.slice(1,3);      /////// SLICE :- No change in original Array just slice the array according to range.
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3);    ///////// SPLICE :- it remove the splice values ffrom original array & it includes the  outer explicit range.
console.log("C",myArr);

console.log(myn2);
