// Stack(Primitive)--> copy 
// Heap(Non Primitive)--> change in original value


let myEmail = "sohani5755@gamil.com"

let anothername = myEmail
anothername = "sohanikajla@gmail.com"
console.log(anothername);
console.log(myEmail);


let userOne={
    email: "sohani57755@g,ail.com",
    age: 23,
}
let userTwo = userOne
userTwo.email = "sohani@gami.com"

console.log(userOne.email);
console.log(userTwo.email);