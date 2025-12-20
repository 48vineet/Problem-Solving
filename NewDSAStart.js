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
//   const first = arr.slice(0, mid);
//   const last = arr.slice(mid);

//   // Step 2: Recursively sort both halves
//   const sortedfirst = mergeSort(first);
//   const sortedlast = mergeSort(last);

//   // Step 3: Merge the sorted halves
//   return merge(sortedfirst, sortedlast);
// }

// // Helper function to merge two sorted arrays
// function merge(first, last) {
//   let result = [];
//   let i = 0;
//   let j = 0;

//   // Compare elements and push smaller one first
//   while (i < first.length && j < last.length) {
//     if (first[i] < last[j]) {
//       result.push(first[i]);
//       i++;
//     } else {
//       result.push(last[j]);
//       j++;
//     }
//   }

//   // Add remaining elements (if any)
//   while (i < first.length) {
//     result.push(first[i]);
//     i++;
//   }

//   while (j < last.length) {
//     result.push(last[j]);
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

//   // Divide the array into first and last halves
//   const first = arr.slice(0, mid);
//   const last = arr.slice(mid);

//   // Recursively sort both halves and merge them
//   return merge(mergeSort(first), mergeSort(last));
// }

// Helper function to merge two sorted arrays
// function merge(first, last) {
//   const result = [];
//   let i = 0,
//     j = 0;

//   // Compare elements and merge in sorted order
//   while (i < first.length && j < last.length) {
//     if (first[i] < last[j]) {
//       result.push(first[i]);
//       i++;
//     } else {
//       result.push(last[j]);
//       j++;
//     }
//   }

//   // Add remaining elements
//   return result.concat(first.slice(i)).concat(last.slice(j));
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
//   let firstArr = [];
//   let lastArr = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       firstArr.push(arr[i]);
//     } else {
//       lastArr.push(arr[i]);
//     }
//   }

//   return [...quickSort(firstArr), pivot, ...quickSort(lastArr)];
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
// let arr = [2, 4, 5, 8, 11, 13, 22, 34, 55, 65, 76, 87];
// let index = bS(arr, 0, arr.length - 1, 87);
// if (index == -1) return console.log("Not found");
// console.log(index);

// function bS(arr, f, l, t) {
//   if (f > l) return -1;
//   let mid = Math.floor((f + l) / 2);
//   if (arr[mid] == t) return mid;
//   if (arr[mid] > t) return bS(arr, f, mid - 1, t);
//   else return bS(arr, mid + 1, l, t);
// }

//! Merge Sort

// let arr = [2, 5, 12, 54, 32, 1, 43, 22, 19];

// function merge(arr, first, mid, last) {
//   let temp = [];
//   let i = first;
//   let j = mid + 1;
//   let k = 0;

//   while (i <= mid && j <= last) {
//     if (arr[i] < arr[j]) {
//       temp[k++] = arr[i++];
//     } else {
//       temp[k++] = arr[j++];
//     }
//   }
//   while (i <= mid) {
//     temp[k++] = arr[i++];
//   }
//   while (j <= last) {
//     temp[k++] = arr[j++];
//   }
//   for (let x = 0; x < temp.length; x++) {
//     arr[first + x] = temp[x];
//   }
// }

// function mergeSort(arr, first, last) {
//   if (first >= last) return;
//   let mid = Math.floor((first + last) / 2);
//   mergeSort(arr, first, mid);
//   mergeSort(arr, mid + 1, last);
//   merge(arr, first, mid, last);
// }

// mergeSort(arr, 0, arr.length - 1);
// console.log(arr);

//! Cyclic Sort

// let arr = [3, 6, 7, 8, 2, 1, 5, 4];
// let i = 0;

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// while (i < arr.length) {
//   let correctIndex = arr[i] - 1;
//   if (arr[i] != arr[correctIndex]) swap(arr, i, correctIndex);
//   else i++;
// }

// console.log(arr);

// let arr = [5, 8, 6, 11, 2, 14, 33, 13, 12, 14];

// mergeSort(arr, 0, arr.length - 1);
// console.log(arr);

// function mergeSort(arr, first, last) {
//   if (first < last) {
//     let mid = Math.floor((first + last) / 2);
//     mergeSort(arr, first, mid);
//     mergeSort(arr, mid + 1, last);
//     merge(arr, first, mid, last);
//   }
// }

// function merge(arr, left, mid, right) {
//   let temp = [];
//   let i = left;
//   let j = mid + 1;

//   while (i <= mid && j <= right) {
//     if (arr[i] < arr[j]) {
//       temp.push(arr[i++]);
//     } else {
//       temp.push(arr[j++]);
//     }
//   }

//   while (i <= mid) {
//     temp.push(arr[i++]);
//   }

//   while (j <= right) {
//     temp.push(arr[j++]);
//   }

//   for (let idx = 0; idx < temp.length; idx++) {
//     arr[left + idx] = temp[idx];
//   }
// }

// let arr = [3, 34, 22, 10, 9];

// for (let j = 0; j < arr.length; j++) {
//   let factor = 0;
//   for (let i = 1; i <= arr[j]; i++) {
//     let n = arr[j];
//     if (n % i == 0) {
//       factor = factor + i;
//     }
//   }
//   arr[j] = factor;
// }
// console.log(arr);
