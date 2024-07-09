const functionArray = [
    function() { console.log("First function"); },
    function() { console.log("Second function"); },
    () => console.log("Third function (arrow function)")
  ];
  
  // Using the functions in the array
  functionArray[0](); // Calls the first function
  functionArray[1](); // Calls the second function
  functionArray[2]();