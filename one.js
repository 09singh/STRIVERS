// number of digits in a number
/*import process from 'process';
process.stdin.on("data", function (data) {
    let n = Number(data.toString().trim())
    let count = 0
    while (n > 0) {
        n = Math.floor(n / 10)
        count++
    } 
    console.log(count);
})
*/


// reverse the integer n
// import process from 'process';
// process.stdin.on("data", function (data) {
//    let n = Number(data.toString().trim())
//     let rev = 0;
//     while (n > 0) {
//         let digit = n % 10;
//         rev = rev * 10 + digit;
//         n = Math.floor(n / 10);
//     }
//     console.log(rev);
// })



// Palendrome number
// import process from 'process';
// process.stdin.on("data", function (data) {
//     let n = Number(data.toString().trim())
//     let rev = 0;
//     let temp = n;
//     while (temp > 0) {
//         let digit = temp % 10;
//         rev = rev * 10 + digit;
//         temp = Math.floor(temp / 10);
//     }
//     if (n === rev) {
//         console.log("palindrome");
//     }
//     else {
//         console.log("not palindrome");
//     }
// })


//GCD
// import process from "process";
// process.stdin.on("data", function (data) {
//     let input = data.toString().trim().split(" ");
//     let n1 = Number(input[0]);
//     let n2 = Number(input[1]);

//     while (n2 !== 0) {
//         let temp = n2;
//         n2 = n1 % n2;
//         n1 = temp;
//     }

//     console.log(n1);
// });

//RECURSION
// function name(n) {
//     if (n === 0) {
//         return;
//     }
//     console.log(n);
//     name(n - 1);
// }
// name(5);
// from no 1 to n
// function printNumbers(n) {
    
//     if (n === 0) {
//         return;
//     }
//     printNumbers(n - 1);
//     console.log(n);
// }
// printNumbers(5);
// sum of n natural numbers

// pattern
// let n = 5;
// for (let i = 1; i <= n; i++) {
    
//     let row = " ";

//     // left stars
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }

//     // spaces
//     for (let j = 1; j <= 2*(n-i); j++) {
//         row += " ";
//     }

//     // right stars
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }

//     console.log(row);
// }

// //lower triangle
//  for (let i = n; i >= 1; i--) {

//     let row = " ";

//     // left stars
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }

//     // spaces
//     for (let j = 1; j <= 2*(n-i); j++) {
//         row += " ";
//     }

//     // right stars
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }

//     console.log(row);
// }
  
//sum of 1st N no / factorial of n
// function sum(n) {
//     if (n === 1) {
//         return ;
//     }

//     return n * sum(n - 1);
// }
// console.log(sum(5));

//reverse the array
//  function reverseArray(arr, start, end) {
//     if (start >= end) {
//         return ;
//     }
//     // swap
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//      reverseArray(arr, start + 1, end - 1);
//      console.log(arr);
// }
// let arr = [1, 2, 3, 4, 5];
// reverseArray(arr, 0, arr.length - 1);
// console.log(arr);

// check palendrome string
// function isPalindrome(str, start, end) {
//     if (start >= end) {
//         return ;
//     }
//     if (str[start] === str[end]) {
//         isPalindrome(str, start + 1, end - 1);
//         console.log("palindrome");
//     }
   

// }
// let str = "madm";
// isPalindrome(str, 0, str.length - 1);
// fabonacci
function fibonacci(n) { 
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));