
// Problem 1:
// Write a function that takes a number as input and returns its square.

function square(n) {
  return n**2;
}
square(5);

// Problem 2:
// Write a function that takes two numbers as input and returns the greater of the two.

function findBiggerNumber (n1, n2) {
  let biggerNumber;
  if (n1 > n2) {
      biggerNumber = n1;
  } else if (n1 < n2) {
      biggerNumber = n2;
  } else {
      biggerNumber = "equal";
  }
  return biggerNumber;
}

// Problem 3:
// Write a function that takes a string as input and returns the length of the string.

function strLength (str) {
  if(typeof str === "string") {
    return str.length;
  } else {
    return "please input a text."
  }
}

strLength("hola");


// Problem 4:
// Write a function that takes an array of numbers as input and returns the average of the numbers.

function numAverage (array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = array[i] + sum;
    result = sum / array.length;
  }
  return result;
}

numAverage([2, 4, 6]);

// Problem 5:
// Write a function that takes a string as input and returns the reverse of the string.

function reverseString(str) {
  return str.split("").reverse().join("");
}

                                         //OR

function reverseString(str) {
  let finalString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    finalString += str[i];
  }
  return finalString;
}

reverseString("Hello World!");


// Problem 6:
// Write a function that takes an array of integers and returns a new array with all the even
// numbers from the original array.

function evenArray(array) {

  let finalArray = [];
  for (let i = 0; i < array.length; i++) {

    if (array[i] % 2 === 0) {
      finalArray.push(array[i]);
    }
  }
return finalArray;
}
evenArray([1, 2, 3, 4, 5, 6]);

// Problem 7:
// Write a function that takes a sentence as input and returns the number of words in the sentence.

function wordsCounter(sentence){
  let result = 0;
  for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] === " ") {
      result = result + 1;
    }
}
let numberOfWords = result + 1 + " words in total.";
return numberOfWords;
}
wordsCounter("Yo me llamo Omar.");

// Problem 8:
// Write a function that takes an array of strings and returns a new array with
// the strings sorted in alphabetical order.

function alphaOrder(array) {

  let finalArray = array.sort();
  return finalArray;
}

alphaOrder(["Dominican Republic", "Japan", "United States", "Spain"]);

// Problem 9:
// Write a function that checks if a given number is a prime number.

function isPrimeNumber (number) {
  function isPrimeNumber(number) {
    if (number <= 1) {
      return number + " is not a prime number, since it's less than or equal to 1.";
    }
  
    if (number <= 3) {
      return number + " is a prime number, since it only can be divided by one and by itself.";
    }
  
    if (number % 2 === 0) {
      return number + " is not a prime number, because it is divisible by 2.";
    }
  
    // Starting the loop from 3 and checking only odd numbers
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        return number + " is not a prime number, because it is divisible by " + i + ".";
      }
    }
  
    return number + " is a prime number, since it only can be divided by one and by itself.";
  }
}

// Problem 10:
// Write a function that takes an array of numbers and returns
// the sum of all the prime numbers in the array.



function isPrimeNumber (number) {
  let result;
  if (number === 2 || number ===3) {
    result = true;
  }
  for(let i = 3; i <= Math.sqrt(number); i++){

    if (number % i === 0) {
      result = false;
    } else {
      result = true;
    }
}
return result;
}


function sumOfPrimes (array, callBackFunction) {
  let primesArray = [];

  for (let i = 0; i < array.length; i++) {

    if(callBackFunction(array[i]) === true) {
      primesArray.push(array[i]);
    } else {
      primesArray.pop(array[i]);
    }
  }
  return primesArray;
  }

sumOfPrimes([2,3,5,10,25,33,39,80], isPrimeNumber);




1. Crear una funcion que reciba dos parametros, un array y otro la funcion de isPrime
2. 
















// Problem 11:
// Write a function that finds the factorial of a given number.

// Problem 12:
// Write a function that checks if a given word is a palindrome
// (reads the same forwards and backwards).

// Problem 13:
// Write a function that finds the nth Fibonacci number.

// Problem 14:
// Write a function that takes a string and returns the most frequent character in the string.

// Problem 15:
// Write a function that checks if a given array is sorted in ascending order.

// Problem 16:
// Write a function that merges two sorted arrays into a single sorted array.

// Problem 17:
// Write a function that finds the intersection of two arrays
// (i.e., the elements that are common to both arrays).

// Problem 18:
// Write a function that reverses the order of words in a sentence.

// Problem 19:
// Write a function that implements a basic calculator, allowing addition,
// subtraction, multiplication, and division of two numbers.

// Problem 20:
// Write a function that generates the first N terms of the Fibonacci
// sequence and returns them in an array.