////// Immediately Invoked Function Expression////////

( function chai(){
    console.log("DB connected")
})();



( ()=>{
    console.log("DB connected two")
})();

( (name)=>{
    console.log(`My name is ${name}`)
})('Sohani');

