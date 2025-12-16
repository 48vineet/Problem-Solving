// Find the First Non-Repeated Character
// Question: Find the first non-repeated character in a string.

// function firstNonRepeatedChar(str) {
//   const charCount = {};
//   for (const char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   for (const char of str) {
//     if (charCount[char] === 1) {
//       return char;
//     }
//   }
//   return null;
// }

// console.log(firstNonRepeatedChar("programming"));

// function mergeSort(arr) {
//   // Base case: if array has 1 or 0 elements, it's already sorted
//   if (arr.length <= 1) {
//     return arr;
//   }

//   // Step 1: Split the array into two halves
//   const mid = Math.floor(arr.length / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   // Step 2: Recursively sort both halves
//   const sortedLeft = mergeSort(left);
//   const sortedRight = mergeSort(right);

//   // Step 3: Merge the sorted halves
//   return merge(sortedLeft, sortedRight);
// }

// // Helper function to merge two sorted arrays
// function merge(left, right) {
//   let result = [];
//   let i = 0;
//   let j = 0;

//   // Compare elements and push smaller one first
//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }

//   // Add remaining elements (if any)
//   while (i < left.length) {
//     result.push(left[i]);
//     i++;
//   }

//   while (j < right.length) {
//     result.push(right[j]);
//     j++;
//   }

//   return result;
// }

// // Example usage:
// const arr = [38, 27, 43, 3, 9, 82, 10];
// console.log("Original Array:", arr);
// console.log("Sorted Array:", mergeSort(arr));

//! Merge Sort Algorithm in JavaScript

// function mergeSort(arr) {
//   // Base case: array of length 0 or 1 is already sorted
//   if (arr.length <= 1) {
//     return arr;
//   }

//   // Find the middle index
//   const mid = Math.floor(arr.length / 2);

//   // Divide the array into left and right halves
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   // Recursively sort both halves and merge them
//   return merge(mergeSort(left), mergeSort(right));
// }

// Helper function to merge two sorted arrays
// function merge(left, right) {
//   const result = [];
//   let i = 0,
//     j = 0;

//   // Compare elements and merge in sorted order
//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }

//   // Add remaining elements
//   return result.concat(left.slice(i)).concat(right.slice(j));
// }

// Example usage
// const arr = [38, 27, 43, 3, 9, 82, 10];
// const sorted = mergeSort(arr);
// console.log("Sorted Array:", sorted);

// const size = 5;
// let queue = new Array(size);
// let front = -1;
// let rear = -1;

// Insert element
// function enqueue(value) {
//   if ((rear + 1) % size === front) {
//     console.log("Queue Overflow!");
//     return;
//   }

//   if (front === -1) {
//     front = 0; // first element
//   }

//   rear = (rear + 1) % size;
//   queue[rear] = value;
//   console.log(value + " inserted");
// }

// Remove element
// function dequeue() {
//   if (front === -1) {
//     console.log("Queue Underflow!");
//     return;
//   }

//   let removed = queue[front];

//   if (front === rear) {
// last element removed
//     front = rear = -1;
//   } else {
//     front = (front + 1) % size;
//   }

//   console.log(removed + " removed");
//   return removed;
// }

//? Display queue
// function display() {
//   if (front === -1) {
//     console.log("Queue is empty");
//     return;
//   }

//   let i = front;
//   let result = "";

//   while (true) {
//     result += queue[i] + " ";
//     if (i === rear) break;
//     i = (i + 1) % size;
//   }

//   console.log("Queue:", result);
// }

// -------- TESTING --------
// enqueue(10);
// enqueue(20);
// enqueue(30);
// enqueue(40);
// display();

// dequeue();
// display();

// enqueue(50);
// enqueue(60);
// display();

//! Insertion Sort

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let key = arr[i];   // current value
//         let j = i - 1;

// Move all elements greater than key one step ahead
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j--;
//         }

// Place the key in its correct position
//         arr[j + 1] = key;
//     }
//     return arr;
// }

// // Example
// let numbers = [5, 3, 8, 4, 2];
// console.log(insertionSort(numbers));

//? let arr = [5, 3, 4, 1, 2];
//? let n = arr.length;

//! Bubble Sort
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);

//! Selection Sort

// let arr = [5, 3, 4, 1, 2];
// let n = arr.length;

// for (let i = 0; i < n - 1; i++) {
//   let minEle = i;
//   for (let j = i + 1; j < n; j++) {
//     if (arr[minEle] > arr[j]) minEle = j;
//   }
//   if (minEle != i) {
//     let temp = arr[minEle];
//     arr[minEle] = arr[i];
//     arr[i] = temp;
//   }
// }

// console.log(arr);

//! Insertion Sort
// let arr = [5, 3, 4, 1, 2];
// let n = arr.length;

// for (let i = 0; i < n; i++) {
//   let key = arr[i];
//   let j = i - 1;
//   while (j >= 0 && arr[j] > key) {
//     arr[j + 1] = arr[j];
//     j--;
//   }
//   arr[j + 1] = key;
// }

// console.log(arr);

//! quick sort
// const quickSort = (arr) => {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let pivot = arr[0];
//   let leftArr = [];
//   let rightArr = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }

//   return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// };

//! HCF / GCD Question

//* Brute Force

// let a = 20;
// let b = 32;

// for (let i = a; i >= 1; i--) {
//   if (a % i == 0 && b % i == 0) {
//     return console.log(i);
//   }
// }

//* Efficient Method

// let a = 20;
// let b = 32;

// while (a != b) {
//   if (a > b) {
//     a = a - b;
//   } else {
//     b = b - a;
//   }
// }

// console.log(b);

//* recursively

// function gcd(a, b) {
//   if (a === b) return console.log(a);
//   if (a > b) {
//     return gcd(a - b, b);
//   } else {
//     return gcd(a, b - a);
//   }
// }

// gcd(20, 32);

// function gcd(a, b) {
//   if (b == 0) return a;
//   return gcd(b, a % b);
// }

// console.log(gcd(344440, 222220));

//! Factorial
// let n = 20;
// for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
//   if (n % i == 0) {
//     process.stdout.write(i + " ");
//     if (i !== n / i) process.stdout.write(n / i + " ");
//   }
// }

//! Binary Search
let arr = [2, 4, 5, 8, 11, 13, 22, 34, 55, 65, 76, 87];
let index = bS(arr, 0, arr.length - 1, 87);
if (index == -1) return console.log("Not found");
console.log(index);

function bS(arr, f, l, t) {
  if (f > l) return -1;
  let mid = Math.floor((f + l) / 2);
  if (arr[mid] == t) return mid;
  if (arr[mid] > t) return bS(arr, f, mid - 1, t);
  else return bS(arr, mid + 1, l, t);
}
