// Declaring a variable 'myNumber' and assigning it the value 10
var myNumber = 10;

// Declaring a variable 'myString' and assigning it the string value 'Hello, JavaScript !'
var myString = `Hello, JavaScript !`;

// Printing the value of 'myNumber' to the console
console.log(myNumber);

// Printing the value of 'myString' to the console
console.log(myString);

// Print a heading '0 - 10 Numbers' to the console
console.log(`0 - 10 Numbers`);

// Iterating through numbers from 0 to 10 and print each number to the console
for (i = 0; i <= 10; i++) {
  console.log(i);
}

// Printing a heading 'First 5 multiples of 3' to the console
console.log(`First 5 multiples of 3`);

// Iterating through numbers 1 to 5 and printing the multiples of 3 to the console
for (i = 1; i <= 5; i++) {
  console.log(i * 3);
}

// Declaring a function 'addNumbers' to add two numbers (num1, num2)
var addNumbers = (num1, num2) => {
  {
    // Adding num1 and num2 and assigning the answer to 'result'
    result = num1 + num2;
  }
  // Returning the result of the addition
  return result;
};

// Calling 'addNumbers' with arguments 60 and 9, and print the result to the console
console.log(`addNumbers result: ${addNumbers(60, 9)}`);

// Declaring an arrow function 'multiplyNumbers' to multiply two numbers (num1, num2)
var multiplyNumbers = (num1, num2) => {
  {
    // Multiplying num1 and num2 and assigning the answer to 'result'
    result = num1 * num2;
  }
  // Returning the result of the multiplication
  return result;
};

// Calling 'multiplyNumbers' with arguments 23 and 3, and printing the result to the console
console.log(`multiplyNumbers result: ${multiplyNumbers(23, 3)}`);
