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
// let numb = [16,47,3,5,6,7,567,7657,3,5,35,43,52,6,56,68,6579,7896,6,4,3468,9,0,98,7654,32,4,567,8,9,86,5,4,56,8,90,54,3,]
// console.log(positiveNumbr(numb));

// #13: Find the maximum number in an array of numbers
function maxNumb(numb){
    let FirstNumb=numb[0]
    // console.log("FirstNumb ::",FirstNumb);
    for(i=0;i<numb.length;i++){
        if(numb[i]>FirstNumb){
            FirstNumb=numb[i]
        }
    }
    return FirstNumb
}
let num = [16,47,3,5,6,7,567,7657,3,5,35,43,52,6,56,68,6579,7896,6,4,3468,9,0,98,7654,32,4,567,8,9,86,5,4,56,8,90,54,3,]
console.log(maxNumb(num));