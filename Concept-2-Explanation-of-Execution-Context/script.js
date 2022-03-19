// Variables are stored as undefined in the first phase that is the memory phase
console.log(firstVariable);
console.log(secondVariable);
console.log(thirdVariable);

// Functions are stored as a whole in the first phase that is the memory phase
console.log(addThreeNumbers);

console.log(solution);

var firstVariable = 28;
var secondVariable = 29;
var thirdVariable = 30;

function addThreeNumbers(firstNumber, secondNumber, thirdNumber) {
  var sum;
  sum = firstNumber + secondNumber + thirdNumber;
  return sum;
}

// A new execution context will be created and pushed to the call stack . 
var solution = addThreeNumbers(2, 5, 6); 
// The recently formed execution context is now popped off and control is back to global execution context.  and solution variable is assigned the value returned by the function 
console.log(`The solution is ${solution}`);
