//Write a JavaScript program to calculate the factorial of a number. Go to the editor
//In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 
//For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 

function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));


// JAVASCRIPT -------

// Given an integer num, write code to print a countdown from num to 1. After the countdown is up, print the line "Liftoff!". 

// function liftoff(num){
	
// }
// 
// liftoff(5) // should print 
// 5 
// 4 
// 3
// 2 
// 1 
// Liftoff! 

function liftoff(num) {
  if (num === 0) {
    console.log("Liftoff!");		
  } else {
    console.log(num);
    liftoff(num-1);
  }
}


// Count Vowels

// Write a function that accepts a string and returns the number of vowels in that string. Use recursion.

// countVowels('Four score and seven years')    // => 9

function isVowel(char) {
  var vowels = 'aeiouAEIOU';
  return vowels.indexOf(char) !== -1
}


 function countVowels(str) {
  
  if (str.length===0) {
  
    return 0 ;
  }
  // console.log(str[0]);
  // countVowels(str.slice(1));
  
  
  if (isVowel(str[0])) {
    return 1 + countVowels(str.slice(1))
  }
}  
  
countVowels('aeeeeeiiiiuuuueee')


// fibonacci

function fibonacci(num) {
  if (num < 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

// Palindrome 

let isPalindrome = function(x) {
  for (let i=0;i<x.length/2;i++) {
      if (x[i] !== x[x.length-1-i]) {
          return false
      }
  } return true
};


// FizzBuzz

//Write a program that prints the numbers from 1 to 100. 
//But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
//For numbers which are multiples of both three and five print “FizzBuzz”.

