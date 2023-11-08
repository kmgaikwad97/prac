// Coding challenge #1: Print numbers from 1 to 10
// for(let i=10;i>0;i--){
//      console.log(i);
// }

// i=1
// while(i<10){
//     console.log(i);
//     i++
// }

// let a = 1;
// do {
//   console.log(a);
//   a++;
// } while (a <= 10);

// #2: Print the odd numbers less than 100

// // even
// for(let i=0; i<10; i+=2){
//     console.log(i);
// }

// // odd
// for(let i=1;i<10;i+=2){
//     console.log(i);
// }

// #3: Print the multiplication table with 7

// for(let i=1; i<=10; i++){
//     // console.log(`7 * ${i}`);
//     let mul = `7 * ${i} = ` + 7 * i
//     console.log(mul);
// }

// #4: Print all the multiplication tables with numbers from 1 to 10
// for(let i=1; i<=10; i++){
//     for(let j=1; j<=10; j++){
//         // console.log("i ::",i ,"j ::", j);
//         const allTable =`${i} * ${j} = ` + i * j; 
//         console.log("allTable ::",allTable);
//     }
// }

// #5: Calculate the sum of numbers from 1 to 10
// let a=null
// for(let i=0;i<10;i++){
//     a += i
// }
// console.log("a ::",a);

// #6: Calculate 10! NOte :: = if 
// let a = 1
// for(let i = 1; i<10;i++){
//     console.log(i);
//     a  *= i;
//     console.log("a ::",a );
// }

// #7: Calculate the sum of odd numbers greater than 10 and less than 30

// for(let i=1;i<=30;i++){
//     // console.log("herher",i);
//     if(i>10 && i<=30){
//         if(i % 2 !== 0){
//             console.log("Odd numers from 10-30",i);
//         }
//     }
// }

// #8: Create a function that will convert from Celsius to Fahrenheit

// #1
// function celciusToFarh(celc){
//     return ((cels*9.0/5.0) + 32)
// }
// const cels = 0
// console.log(celciusToFarh(cels));

// #9: Create a function that will convert from Fahrenheit to Celsius

// function FarhToCelcius(farh){
//     return (farh-32) * 5/9;
// }
// const farh = 212
// console.log(FarhToCelcius(farh));

// #10: Calculate the sum of numbers in an array of numbers

// let sum = 0
// function sumArray(arrayNumbers){
//     for(let i = 0;i<arrayNumbers.length;i++){
//         // console.log(arrayNumbers[i]);
//         sum += arrayNumbers[i]
//     }
//     // console.log(sum);
//     return sum; 
// }
// const arrayNumbers = [1,2,6,3,23,57,45,58,4,35,44,54]
// console.log(sumArray(arrayNumbers));


// #11: Calculate the average of the numbers in an array of numbers
// function findAvg(arrNum){
//     let sum=0;
//     let avgNum;
//     for(let i=0;i < arrNum.length;i++){
//         console.log(arrNum[i]);
//          sum += arrNum[i]
//          avgNum = arrNum.length
//     }
//     return data = sum/avgNum
// }
// let arr = [2,5,6,46,7,8,4,5,5,6,6,4,4,6,3]
// console.log(findAvg(arr));


// #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
// function positiveNumbr(normalNumb){
//     let positiveNumb = []
//     for(let i=0;i<normalNumb.length;i++){
//         if(normalNumb[i]%2===0){
//             positiveNumb.push(normalNumb[i])
//         }
//     }
//     return positiveNumb
// }
// let numb = [16,47,3,5,6,7,567,7657,3,5,35,43,52,6,56,68,6579,7896,6,4,3468,9,0,98,7654,32,4,567,8,9,86,5,4,56,8,90,54,3]
// console.log(positiveNumbr(numb));

// #13: Find the maximum number in an array of numbers
// function maxNumb(numb){
//     let FirstNumb=numb[0]
//     // console.log("FirstNumb ::",FirstNumb);
//     for(i=0;i<numb.length;i++){
//         if(numb[i]>FirstNumb){
//             FirstNumb=numb[i]
//         }
//     }
//     return FirstNumb
// }
// let num = [16,47,3,5,6,7,567,7657,3,5,35,43,52,6,56,68,6579,7896,6,4,3468,9,0,98,7654,32,4,567,8,9,86,5,4,56,8,90,54,3]
// console.log(maxNumb(num));


// #14: Print the first 10 Fibonacci numbers without recursion
// let f0 = 0;
// // console.log(f0);

// let f1 = 1;
// // console.log(f1);

// for (let i = 2; i < 10; i++) {
//     let fibo = f1 + f0;
//     console.log("final fibo" ,fibo);

//     f0 = f1;
//     // console.log("f0 ::",f0);
//     f1 = fibo;
//     // console.log("f1 ::",f1);
// }


// #15: Create a function that will find the nth Fibonacci number using recursion

// function fiboFinder(num){
//     let fib = [0, 1];   // fib = [0,1,1]
//     for (let i = 2; i <= num; i++) {    
//         // fib[i]=fib[i-1]+fib[i-2] // storing in array
//         // Calculate the next Fibonacci number by adding the last two numbers
//         let nextFib = fib[i - 1] + fib[i - 2];  // fib[1] + fib[0]   //  1 + 0
//         // console.log("nextFib ",nextFib);
//         fib.push(nextFib); // Add the next Fibonacci number to the array
//       }
//       for (let i = 0; i <= num; i++) {
//         //   console.log(fib[i]);
//         }
//         return fib[10]
//     //   console.log("final output",fib[10]);
// }
// console.log(fiboFinder(10));


// PRime 
// #16: Create a function that will return a Boolean 
// specifying if a number is prime

// function isPrime(n){
//     if(n < 2){
//         return false
//     }
//     if(n===2){
//         return true
//     }
//     let maxLengthData = Math.sqrt(n)
//     for(let i =0;i<=maxLengthData;i++){
//         if(n&i === 0){
//             return false
//         }
//     }
//     return true
// }
// console.log(0, " is prime? ", isPrime(0));
// console.log(1, " is prime? ", isPrime(1));
// console.log(2, " is prime? ", isPrime(2));
// console.log(3, " is prime? ", isPrime(3));
// console.log(4, " is prime? ", isPrime(4));
// console.log(5, " is prime? ", isPrime(5));
// console.log(21, " is prime? ", isPrime(21));
// console.log(27, " is prime? ", isPrime(27));


// #17: Calculate the sum of digits of a 
// positive integer number

// let sum;
// function sumNo(n){
//     let numb = n.toString();
//     // console.log(typeof numb);

//     for(let char of numb){
//         // console.log("char ::",char);
//         let digit = parseInt(char)
//         // console.log(digit,"sdf");
//         sum=+digit
//     }
//     return sum
// }
// sum = sumNo(123456789)
// console.log(sum);



// // #18: Print the first 100 prime numbers
// print100Prime(100)
// function print100Prime(primeNumber){
//     i=1
//     n=0
//     while(i<=primeNumber){
//         if(isPrime(n)){
//             console.log(i,"==>",n);
//             i++
//         }
//         n++
//     }
// }

// function isPrime(num){
//     if(num<2){
//         return false;
//     }
//     if(num===2){
//         return true;
//     }
//     let maxLengthData = Math.sqrt(num)
//     for(let i=2;i<=maxLengthData;i++){
//         if(num%i===0){
//             return false
//         }
//     }
//     return true
// }
// // console.log(isPrime(0));

// #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

// console.log(getPrimes(10, 100));

// function getPrimes(nPrimes, startAt)
// {
//     let ar = [];
//     let i = startAt;
//     while(ar.length < nPrimes)
//     {
//         if (isPrime(i))
//         {
//             ar.push(i);
//         }   
//         i++;
//     }   
//     return ar;
// }
// // Returns true if a number is prime
// function isPrime(n)
// {
//     if (n < 2)
//         return false;
//     if (n == 2)
//         return true;
//     let maxDiv = Math.sqrt(n);
//     for(let i = 2; i <= maxDiv; i++)
//     {
//         if (n % i == 0)
//         {
//             return false;
//         }
//     }
//     return true;
// }

// // #20: Rotate an array to the left 1 position

// const arr = [1,2,3]
// rotate(arr)
// console.log(arr);

// function rotate(arr){
//     let shift = arr.shift()
//     arr.push(shift)
// }

// // #21: Rotate an array to the right 1 position

// const arr = [1,2,3]
// rotate(arr)
// console.log(arr);

// function rotate(arr){
//     let shift = arr.pop()
//     arr.unshift(shift)
// }

// #22: Reverse an array
// let arr1 = [1,2,3,4,5]
// let arr2 = reverseArray(arr1)
// console.log(arr2);

// function reverseArray(arr1){
//     let arr2 = []
//     for(let i=arr1.length-1;i>=0;i--){
//         arr2.push(i)
//     }
//     return arr2
// }

// #23: Reverse a string

// var s = reverseString("JavaScript");
// console.log(s);

// function reverseString(s)
// {
//     var s2 = "";

//     for(var i = s.length - 1; i >= 0; i--)
//     {
//         var char = s[i];
//         s2 += char;
//     }

//     return s2;
// }

// #24: Create a function that will merge two arrays 
// and return the result as a new array
// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let arr = [];
// const op = mergeArray(arr1, arr2)
// console.log(op);
// function mergeArray(arr1, arr2) {
//     for (let el of arr1) {
//         arr.push(el)
//     }
//     for (let el of arr2) {
//         arr.push(el)
//     }
//     return arr
// }

// #25: Create a function that will receive two arrays 
// of numbers as arguments and return an array composed of all the numbers 
// that are either in the first array or second array but not in both

// let ar1 = [1, 2, 3, 10, 5, 3, 14];
// let ar2 = [1, 4, 5, 6, 14];
// let arr = [];
// const op = mergeArray(ar1, ar2)
// console.log(op);
// function mergeArray(arr1, arr2) {
//     for (let el of arr1) {
//         // console.log(el);
//         if(!arr2.includes(el)){
//             arr.push(el)
//         }
//     }
//     for (let el of arr2) {
//         // console.log(el);
//         if(!arr1.includes(el)){
//             arr.push(el)
//         }
//     }   
//     return arr
// }


