
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

// Problem 6:
// Write a function that takes an array of integers and returns a new array with all the even
// numbers from the original array.

// Problem 7:
// Write a function that takes a sentence as input and returns the number of words in the sentence.

// Problem 8:
// Write a function that takes an array of strings and returns a new array with
//  the strings sorted in alphabetical order.

// Problem 9:
// Write a function that checks if a given number is a prime number.

// Problem 10:
// Write a function that takes an array of numbers and returns
// the sum of all the prime numbers in the array.

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