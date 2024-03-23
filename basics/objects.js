//singleton 

//Object Literals
//Object.create



const mySym = Symbol("key1")
const js_user = {
    name: "Sohani",
    "full_name": "Sohani Kajla",
    [mySym]:"mykey1",
    age: 20,
    location: "Behram",
    email: "sohani@gmail.com",
    isLogged: false,
    lastLogindays: ["Monday"," Staurday"]
}


// console.log(js_user["full_name"])

// js_user.email = "soh@gmail.com"
// Object.freeze(js_user)
// js_user.email = "soh@gmail.com"
// console.log(js_user[mySym]);
// console.log(js_user);


js_user.greeting = function(){
    console.log("hello JS users");
}
js_user.greeting2 = function(){
    console.log(`hello JS user, ${this.name}`);
}
console.log(js_user.greeting)
console.log(js_user.greeting2())
