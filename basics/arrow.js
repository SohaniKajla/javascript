let user= {
    username : "Sohani",
    price : 999,
    WelcomwMessage : function(){
        console.log(`${this.username} , Welcomw to Website`)
        console.log(this)
    }
}


user.WelcomwMessage()
user.username= "Tarman"
user.WelcomwMessage()


//////////////////////////////////////////////////////////////

const addone = (num1 , num2) => num1 +num2
console.log(addone(2,3))


const addne = (num1 , num2) =>( num1 +num2)
console.log(addne(2,3))


const add =(num1 ,num2) =>{
        console.log(num1+num2)
}
add(4455,654)