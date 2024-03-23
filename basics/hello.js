function createHelloWorld(){
    console.log("Hello World");
}
createHelloWorld();



var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};