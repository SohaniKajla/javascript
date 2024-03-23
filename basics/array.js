//  //Array 

//  const myArray = [0,1,2,3,4,5,"Sohani"]
//  const myHeros = ["shaktiman", "nagaraj"]

//  const myArr1 = new Array(1,2,3,4,5,)
// //  console.log(myArray[2]);


//  ///Array methods

// // myArray.push(6)
// // myArray.pop();

// // myArray.unshift(0)
// // myArray.shift()

// // console.log(myArray.includes("Sohani"));
// // console.log(myArray.indexOf(5));

// // const Arr = myArray.join()
// // console.log(Arr);
// // console.log(typeof Arr);
// // console.log(myArray);
// // console.log(typeof myArray);

// ///////slice , splice

// console.log("A ", myArray);
// const mya1 = myArray.slice(1,3)

// console.log(mya1);
// console.log("B ", myArray);

// const mya2 = myArray.splice(1,3)
// console.log("C ", myArray);

// console.log(mya2);



// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// const removed = myFish.splice(2, 1, "drum", "guitar")

// console.log(myFish);
// console.log(removed);



const marvel_heros = ["thor", "Ironman"]
const dc = ["batsman", "spiderman"]

// marvel_heros.push(dc)

// const all_heros = marvel_heros.concat(dc)
// console.log(all_heros);

const heros = [...marvel_heros, ...dc]
// console.log(heros);

const anotehr_array = [1,43,2,1,[3,4,4],4,45,[3,4,5,[7,68]]];
const real_array = anotehr_array.flat(Infinity)
console.log(real_array);







console.log(Array .isArray("Sohani"))
console.log(Array .from("Sohani"))
console.log(Array .from({name: "Sohani"}))



const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));


