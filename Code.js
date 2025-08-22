// JavaScript Learning Series:

// Q1 Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}  
 
// Q2 Print even numbers between 1 to 50
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}

// Q3 Print odd numbers between 1 to 50
for (let i = 1; i <= 50; i += 2) {
  console.log(i);
}




// Q1 Sum of numbers from 1 to n
function sumOfNumbers(n) {
  return n * (n + 1) / 2;
}
console.log(sumOfNumbers(30));

// Q2 Find the largest of two numbers
function largestAndSmallest(a, b) {
  if (a > b) {
      console.log("Largest number is:", a);
      console.log("Smallest number is:", b);
  } else {
      console.log("Largest number is:", b);
      console.log("Smallest number is:", a);
  }
}
largestAndSmallest(100, 10);

// Q3 Smallest of two numbers
function smallestNumber(a, b) {
  if (a < b) {
      console.log("Smallest number is:", a);
  } else {
      console.log("Smallest number is:", b);
  }
}
smallestNumber(100, 1000);

// Q4 Check if a number is even or odd
function oddAndEven(num) {
  if (num % 2 == 0) {
      console.log(num, "is even number");
  } else {
      console.log(num, "is odd number");
  }
}
oddAndEven(4);

// Q5 Sum of even numbers till n
function sumEvenNumbers(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
      sum += i;
  }
  return sum;
}
console.log(sumEvenNumbers(10));

// Q6 Find the sum of odd numbers till n
function sumOddNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 2) {
      sum += i;
  }
  return sum;
}
console.log(sumOddNumbers(10));

// Q7 Print multiplication table of n
function table(n) {
  for (let i = 1; i <= 10; i++) {
      console.log(`${n} x ${i} = ${n * i}`);
  }
}
table(5);

// Q8 Find largest digit in number
const largestDigit = (num) => {
  if (num < 10) return num;
  return Math.max(num % 10, largestDigit(Math.floor(num / 10)));
};
console.log(largestDigit(5890129));

// Q9 Sum of digits in a number
function sumOfDigits(num) {
  return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}
console.log(sumOfDigits(753));

// Q10 Find largest among 3 numbers
function findLargest(a, b, c) {
  return Math.max(a, b, c);
}
console.log(findLargest(18, 42, 27));


// Q1 Check if a number is prime
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));

// Q2 Print all prime numbers from 1 to 100
function printPrimes(n) {
  for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
          console.log(i);
      }
  }
}
printPrimes(100);

// Q3 Reverse a number
function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
      reversed = reversed * 10 + num % 10;
      num = Math.floor(num / 10);
  }
  return reversed;
}
console.log(reverseNumber(12345));

// Q4 Check if number is palindrome
function isPalindrome(num) {
  return num === reverseNumber(num);
}
console.log(isPalindrome(121));

// Q5 Factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));
