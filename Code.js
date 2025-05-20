// DAY 1

// Q1 Print numbers from 1 tob 10

// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }

//Q2 Print even numbers between 1 to 50

// for (let i = 0; i <= 50; i += 2) {
//     console.log(i);
// }

// Print odd numbers between 1 to 50
// for (let i = 1; i <= 50; i += 2) {
//     console.log(i);
// }

// DATY 2

// 1)Sum of numbers from 1 to n
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

practical 10

#include <stdio.h>
#include <stdlib.h>
int main() {
 FILE *fp;
 char fileName[100];
 char data[100];
 // Prompt the user for the file name
 printf("Enter the file name to create: ");
 scanf("%s", fileName);
 // Open the file in write mode
 fp = fopen(fileName, "w");
 if (fp == NULL) {
 printf("Error: Unable to create the file.\n");
 return 1;
 }
 printf("File created successfully.\n");
 // Prompt the user for data to write to the file
 printf("Enter the data to write into the file (max 100 characters): ");
 getchar(); // Consume the newline left by scanf
 fgets(data, sizeof(data), stdin);
 // Write the user input into the file
 fputs(data, fp);
 printf("Data written successfully.\n");
 fp = fopen(fileName, "r");
 if (fp == NULL) {
printf("Error: Unable to read the file.\n");
 return 1;
 }
 while(fp!=EOF)
 {
 printf("\n %s",data);
 return 1;
 }
 // Close the file
 fclose(fp);
 return 0;
}

practical 6

#include <stdio.h>
int main() {
 int n, i;
 long long first = 0, second = 1, next;
 // Input the number of terms
 printf("Enter the number of terms: ");
 scanf("%d", &n);
 // Validate input
 if (n <= 0) {
 printf("Please enter a positive integer.\n");
 return 1;
 }
 printf("Fibonacci series: ");
 // Loop to generate Fibonacci series
 for (i = 1; i <= n; i++) {
 if (i == 1) {
 printf("%lld ", first); // Print the first term
 continue;
 }
 if (i == 2) {
 printf("%lld ", second); // Print the second term
 continue;
 }
 next = first + second; // Calculate next term
 first = second; // Update first
 second = next; // Update second
 printf("%lld ", next); // Print the next term
 }
 printf("\n");
 return 0;
}

practical 7

#include <stdio.h>
int main ()
{
 int a [1000],i,n,min,max;
 printf("Enter size of the array : ");
 scanf("%d",&n);
 printf("Enter elements in array : ");
 for(i=0; i<n; i++)
 {
 scanf("%d",&a[i]);
 }
 min=max=a[0];
 for(i=1; i<n; i++)
 {
 if(min>a[i])
 min=a[i];
 if(max<a[i])
 max=a[i];
 }
 printf("minimum of array is : %d",min);
 printf("\nmaximum of array is : %d",max);
 return 0;
}
 

practical 9

#include <stdio.h> 
struct Student 
{
char name[50];
int roll_number;
float marks;
}; // Define a structure to represent a student record 
void display details(struct Student student)
{
 printf("Student Details:\n");
 printf("Name: %s\n", student.name);
 printf("Roll Number: %d\n", student.roll_number);
 printf("Marks: %.2f\n", student.marks);
} // Function to display student details
int main() {
 struct Student student; // Creating a student record
 printf("Enter name: "); // Input student details
 scanf("%49s", student.name);
 printf("Enter roll number: ");
 scanf("%d", &student.roll_number);
 printf("Enter marks: ");
 scanf("%f", &student.marks);
 display_details(student); // Displaying the student details
 return 0;
}

practical 8


#include <stdio.h>
int main() 
{
int a, b, temp;
int *ptr1, *ptr2;
printf("Enter the value of a and b: ");
scanf("%d %d", &a, &b);
printf("\nBefore swapping a = %d and b = %d", a, b);
// Assign the memory address of a and b to *ptr1 and *ptr2
ptr1 = &a;
ptr2 = &b;
// Swap the values a and b
temp = *ptr1;
*ptr1 = *ptr2;
*ptr2 = temp;
printf("\nAfter swapping a = %d and b = %d", a, b);
return 0;
}




