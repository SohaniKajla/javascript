
////////////// STACK MEMORY(PRIMITIVE)  ////////////////////////////
let myYoutubeChannel = "SohaniKajla"
let anotherChannel = myYoutubeChannel;

myYoutubeChannel="SonaliKajla"

console.log(myYoutubeChannel);
console.log(anotherChannel);


////////////// HEAP MEMORY(NON=PRIMITIVE) //////////////////////////

let userOne ={
    name: "Sonali",
    age:22,
    email:"sonalikajla@gmail.com"
}
let userTwo = userOne;
userTwo.email="sohanikajla@gmail.com"

console.log(userOne);
console.log(userTwo)