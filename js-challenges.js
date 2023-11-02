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

// function celciusToFarh(celc){
//     return ((cels*9.0/5.0) + 32)
// }
// const cels = 0
// console.log(celciusToFarh(cels));

function FarhToCelcius(farh){
    return (farh-32) * 5/9;
}
const farh = 212
console.log(FarhToCelcius(farh));



