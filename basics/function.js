const user= {
    username : "Sohani",
    price : 39
}

function handleFunction(getObject){
    console.log(`Usernaem is ${getObject.username} and price is ${getObject.price}`)
}
handleFunction(user)




function number(...num){
    console.log(num)
}
number(1,2,3)