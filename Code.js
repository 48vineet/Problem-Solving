// JavaScript Learning Series:

// Q1 Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i); 
}  
 
// Sort An Array

function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false; // Flag to check if any swaps occurred in this pass
    for (let j = 0; j < n - 1 - i; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap them if they are in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true; // Mark that a swap occurred
      }
    }
    // If no two elements were swapped by inner loop, then the array is sorted
    if (!swapped) {
      break;
    }
  }
  return arr;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray); // Output: Sorted array: [11, 12, 22, 25, 34, 64, 90]


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





//Kadane Algo

function maxSubarraySum(arr) {
  // Initialize maxSoFar with the first element, assuming at least one element exists.
  // If the array can be empty, initialize with -Infinity.
  let maxSoFar = arr[0]; 
  let maxEndingHere = arr[0];

  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // For each element, decide whether to extend the previous subarray or start a new one.
    // maxEndingHere tracks the maximum sum of a subarray ending at the current position.
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

    // Update maxSoFar if maxEndingHere is greater.
    // maxSoFar tracks the overall maximum sum found so far.
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Example usage:
const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(arr1)); // Output: 6 (from subarray [4, -1, 2, 1])

const arr2 = [1, 2, 3, -2, 5];
console.log(maxSubarraySum(arr2)); // Output: 9 (from subarray [1, 2, 3, -2, 5])

const arr3 = [-1, -2, -3, -4];
console.log(maxSubarraySum(arr3)); // Output: -1 (from subarray [-1])


// Returns the majority element if one exists (> n/2 occurrences), otherwise returns null
function majorityElement(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return null;

  // 1) Find candidate
  let candidate = null;
  let count = 0;
  for (const x of nums) {
    if (count === 0) {
      candidate = x;
      count = 1;
    } else if (x === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // 2) Verify candidate actually is majority
  if (candidate === null) return null;
  let occurrences = 0;
  for (const x of nums) if (x === candidate) occurrences++;

  return occurrences > Math.floor(nums.length / 2) ? candidate : null;
}

// Example usage:
console.log(majorityElement([3,3,4]));        // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2
console.log(majorityElement([1,2,3]));         // null (no majority)


