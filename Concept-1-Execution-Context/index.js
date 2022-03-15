// Everything in JavaScript happens inside the execution contex t

// Everything inside this are stored either in the memory side (left side) and code side (right side )

// Memory component has everything stored in it as the key value pairs .

// Memory component has all the variable and functions as key value pairs etc (Also called Variable Enviroment )

// Code component has all the code (Thread of Execution)

// JavaScript is a synchronous single threaded language-

// Java script can only execute on command at a time and in a specific order .

// It can only go to the next line , once all the other lines are executed .

var x = 1; // will be stored in the execution context in the variable environemnt as key value pair as var x : 1;

// this function will be stored as key value pair too
// function HelloWorld : {all the code here}
function HelloWorld() {
  console.log("GoodWorld");
}
