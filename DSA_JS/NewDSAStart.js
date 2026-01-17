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

//! Har Level MANNG DSA QUE
//? Given an array arr[] of integers, where each element arr[i] represents the number of pages in the i-th book. You also have an integer k representing the number of students. The task is to allocate books to each student such that:

//? Each student receives atleast one book.
//? Each student is assigned a contiguous sequence of books.
//? No book is assigned to more than one student.
//? The objective is to minimize the maximum number of pages assigned to any student. In other words, out of all possible allocations, find the arrangement where the student who receives the most pages still has the smallest possible maximum.

//? Note: If it is not possible to allocate books to all students, return -1.

//? Examples:

//? Input: arr[] = [12, 34, 67, 90], k = 2
//? Output: 113
//? Explanation: Allocation can be done in following ways:
//? => [12] and [34, 67, 90] Maximum Pages = 191
//? => [12, 34] and [67, 90] Maximum Pages = 157
//? => [12, 34, 67] and [90] Maximum Pages = 113.
//? The third combination has the minimum pages assigned to a student which is 113.

//**
//  * @param {number[]} arr
//  * @param {number} k
//  * @returns {number}
//  */

// function isValid(arr, k, maxPages) {
//   let studentR = 1;
//   let currPage = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let pages = arr[i];
//     if (arr[i] + currPage <= maxPages) {
//       currPage += pages;
//     } else {
//       studentR++;
//       currPage = pages;
//       if (pages > maxPages) return false;
//     }
//   }
//   return studentR <= k;
// }

// class Solution {
//   findPages(arr, k) {
//     let n = arr.length;

//     if (n < k) {
//       return -1;
//     }

//     let start = Math.max(...arr);
//     let end = arr.reduce((a, b) => a + b, 0);
//     let ans = -1;

//     while (start <= end) {
//       let mid = Math.floor((start + end) / 2);
//       if (isValid(arr, k, mid)) {
//         ans = mid;
//         end = mid - 1;
//       } else {
//         start = mid + 1;
//       }
//     }
//     return ans;
//   }
// }

//! MEDIUM KOKO EATING BANANA
//? Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. ?The guards have gone and will come back in h hours.
//? Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
//? Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
//? Return the minimum integer k such that she can eat all the bananas within h hours.

// /**
//  * @param {number[]} piles
//  * @param {number} h
//  * @return {number}
//  */

// var isValid = function (pile, speed, h) {
//   let totalHour = 0;
//   for (let i = 0; i < pile.length; i++) {
//     totalHour += Math.ceil(pile[i] / speed);
//   }
//   return totalHour <= h;
// };

// var minEatingSpeed = function (arr, h) {
//   let start = 1;
//   let end = Math.max(...arr);
//   let ans = end;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (isValid(arr, mid, h)) {
//       ans = mid;
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return ans;
// };

//! Easy
//? Given a string s consisting of words and spaces, return the length of the last word in the string.
//? A word is a maximal substring consisting of non-space characters only.

// function lengthOfLastWord(s) {
//   const words = s.trim().split(" ");
//   return words[words.length - 1].length;
// }

// console.log(lengthOfLastWord("Hello World")); // 5

// let arr = [12, 34, 67, 90];

// arr.pop();
// console.log(arr.length);

// function factorial(n) {
//   let fact = 1n;
//   for (let i = n; i >= 1n; i--) {
//     fact = fact * i;
//   }
//   return fact;
// }

// console.log(factorial(36525n));

//! Move Zero at last

// let arr = [0, 1, 0, 3, 12];
// let newArr = [];
// let i = 0;
// let j = arr.length;

// for (; i < j; i++) {
//   if (arr[i] !== 0) {
//     newArr.push(arr[i]);
//   }
// }

// for (i = 0; i < j; i++) {
//   if (arr[i] == 0) {
//     newArr.push(arr[i]);
//   }
// }

// for (let idx = 0; idx < arr.length; idx++) {
//   arr[idx] = newArr[idx];
// }

// console.log(arr);

//? 58 ms time complexity bluhhhhhhhhhhhhhhhhhh

//? Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

//? The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

// nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// let idx = 1;
// for (let i = 0; i < nums.length - 1; i++) {
//   if (nums[i] !== nums[i + 1]) {
//     nums[idx] = nums[i + 1];
//     idx++;
//   }
// }
// console.log(nums);

//! 121. Best Time to Buy and Sell Stock
//? You are given an array prices where prices[i] is the price of a given stock on the ith day.

//? You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

//? Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//? Input: prices = [7,1,5,3,6,4]
//? Output: 5
//? Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//? Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// let prices = [7, 1, 5, 3, 6, 4];

// let buy = prices[0];

// let profit = 0;
// for (let i = 1; i < prices.length; i++) {
//   if (prices[i] < buy) {
//     buy = prices[i];
//     console.log("Buy at day", i);
//   } else if (prices[i] - buy > profit) {
//     profit = prices[i] - buy;
//     console.log("Profit is", profit);
//   }
// }

//? 189. Rotate Array
//? Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

//? Example 1:
//? Input: nums = [1,2,3,4,5,6,7], k = 3
//? Output: [5,6,7,1,2,3,4]
//? rotate 1 steps to the right: [7,1,2,3,4,5,6]
//? rotate 2 steps to the right: [6,7,1,2,3,4,5]
//? rotate 3 steps to the right: [5,6,7,1,2,3,4]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

var rotate = function (nums, k) {
  let size = nums.length;
  let n = k % size;
  reverse(nums, 0, size - 1);
  reverse(nums, 0, n - 1);
  reverse(nums, n, size - 1);
};

console.log(nums);
