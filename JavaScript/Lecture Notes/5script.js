// // // // // // // // // console.log("SHLOK KUMAR");

// // // // // // // // function myFunction() {
// // // // // // // //     console.log("Yor are learning JavaScript");
// // // // // // // //     console.log("You are working on Function");
// // // // // // // // }
// // // // // // // // myFunction();

// // // // // // // function myFunction(msg) {
// // // // // // //     //parameter -> input
// // // // // // //     console.log(msg);
// // // // // // // }

// // // // // // // myFunction("I am learning JavaScript");//argument

// // // // // // function sum(a,  b) {
// // // // // //     console.log(a + b);
// // // // // // }

// // // // // // sum(5, 14);

// // // // // // function sub(a , b) {
// // // // // //     console.log(a - b );
// // // // // // }

// // // // // function sum( a, b) {
// // // // //     s = a + b;
// // // // //     return s;
// // // // // }
// // // // //  let val = sum(5, 14);
// // // // // console.log(val);

// // // // //Arrow function-->>

// // // // //sum function using arrow function-

// // // // // function sum(a, b) {
// // // // //     return a + b ;
// // // // // }
// // // // // const arrowSum = (a , b) => {
// // // // //     console.log(a + b);
// // // // // };

// // // // //multiply using arrow function-

// // // // // function multiply(a, b) {
// // // // //     return a * b;
// // // // // }

// // // // // let arrowMultiply = (a , b) => {
// // // // //     console.log(a * b);
// // // // // };

// // // // //Practices --
// // // // //Q1.Create a function using the "Function " keyboard that takes a String as an argument & returns the number of vowels in the string.

// // // // function countVowels(str) {
// // // //   let count = 0;
// // // //   for (const char of str) {
// // // //     if (+
// // // //       char === "a" ||
// // // //       char === "e" ||
// // // //       char === "i" ||
// // // //       char === "o" ||
// // // //       char === "u"
// // // //     ) {
// // // //       count++;
// // // //     }
// // // //   }
// // // //   console.log(count);
// // // // }

// // // let arr = [1, 2, 3, 4, 5, "ranchi", "delhi"];

// // // arr.forEach((val, idx) => {
// // //   console.log(val, idx);
// // // })

// // // for  a given array of a numbers , print the square  of each value using the forEach loop.

// // // let num = [ 2, 4, 6, 1, 3, 5];

// // // num.forEach((num) =>{
// // //   console.log(num**2);

// // // let num = [3,4,5,2,6,];

// // // num.forEach((num) =>{
// // //   console.log(num+2);
// // // })

// // // Map Method
// // let nums = [213, 53, 45, 54, 52];

// // let newArr =nums.map((val) => {
// //   return val ** 2;
// // });

// // console.log(newArr);

// // filter Array

// let arr = [1, 2, 4, 7, 5, 8, 9, 10, 3, 6];
// let evenArray = arr.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(evenArray)

// question 1  -- we are given array of marks of student . filter out of the marks of students that scored 90+.

// let marks = [98, 78 , 89, 90, 80, 89];

// let topper =marks.filter((val) =>{
//     return val > 90;
// });
// console.log(topper);

// question 2  -- Take a number n as a input from user . Create an array of number from 1 to n.
//                use  the reduce method  to calculate sum of all number in the array.
//                use the reduce method to calculate product of all number in the array.

// let n = prompt("Enter a number : ");

// let arr = [];

// for (let i = 1; i <= n; i++) {
//   arr[i - 1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((res, curr) => {
//   return res + curr;
// });
// console.log(sum);


console.log("Shlok kumar");