// DAY 1
// Q1 Print numbers fr om 1 tob 10
 
// for (let i = 0; i <= 10; i += 2) { 
//     console.log(i); 
// }
          
//Q2 Print even numbers between 1 to 50  
 
// for (let i = 0; i <= 50; i += 2) {
//     console.log(i);  
// }.    
 
// Print odd numbers between 1 to 50
// for (let i = 1; i <= 50; i +=  2) {
//     console.log(i);
// }  
     
// DATY 2  
 
// 1)Sum of numbers from 1 to n. 
// function sumOfNumbers(n) {
//     return n * (n + 1) / 2;
// }
// console.log(sumOfNumbers(30));

 
// 2) Find the largest of two numbers
// function largestAndSmallest(a, b) {
//     if (a > b) {
//         console.log("Largest number is:", a);
//         console.log("Smallest number is:", b);
//     } else {
//         console.log("Largest number is:", b);
//         console.log("Smallest number is:", a);
//     }
// }
// largestAndSmallest(100, 10);

// 3) Find the smallest of two numbers
// function smallestNumber(a, b) {
//     if (a < b) {
//         console.log("Smallest number is:", a);
//     } else {
//         console.log("Smallest number is:", b);
//     }
// }
// smallestNumber(100, 1000);

//4)Check if a number is even or odd

// function oddAndEven(num) {
//     if (num % 2 == 0) { 
//         console.log(num, "is even number");
//     } else {
//         console.log(num, "is ood number");
//     }
// }

// oddAndEven(4)

// Find the sum of even numbers till n (n will be entered by user )

// let n = prompt("Enter the number");

// function sumEvenNumbers(n) {
//     let sum = 0;
//     for (let i = 2; i <= n; i += 2) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumEvenNumbers(n));

// Find all even numbers up to(n= 10) : 2, 4, 6, 8, 10 = 30

// function evenNo() {
//     let n = prompt("Enter No", "10");
//     let numTerms = n / 2;
//     let sum = numTerms * (2 + n) / 2;
//     console.log(sum);
// }

// evenNo();


// Find the sum of Odd numbers till n

// function sumOddNumbers() {
//     let n = prompt("Enter no", "10");
//     let answer = n * n;
//     return answer;
// }
// console.log(sumOddNumbers());


// Print multiplication table of n

// function table() {
//     let n = prompt("Enter Table", "2");
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${n} x ${i} = ${n * i}`);
//     }
// }

// table();

// const largestDigit = (num) => {
//     if (num < 10) return num;
//     return Math.max(num % 10, largestDigit(Math.floor(num / 10)));
// };

// console.log(largestDigit(5890129)); // Output: 9

// - Sum of digits in a number
// Example:
// Question: Find the sum of the digits in the number 753.
// Solution: (7 + 5 + 3 = 15)

// function sumOfDigits(num) {
//     return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
// }

// console.log(sumOfDigits(753)); // Output: 15


// - Find the largest among three numbers
// Example:
// Question: Find the largest number among 18, 42, and 27.
// Solution: The largest number is 42.

// function findLargest(a, b, c) {
//     return Math.max(a, b, c);
// }

// console.log(findLargest(18, 42, 27)); // Output: 42
  // 



// console.log(findLargest(18, 42, 27)); // Output: 42
  // 







