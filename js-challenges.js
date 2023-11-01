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

// // even
// for(let i=0; i<10; i+=2){
//     console.log(i);
// }

// // odd
// for(let i=1;i<10;i+=2){
//     console.log(i);
// }

// for(let i=1; i<=10; i++){
//     // console.log(`7 * ${i}`);
//     let mul = `7 * ${i} = ` + 7 * i
//     console.log(mul);
// }

for(let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
        // console.log("i ::",i ,"j ::", j);
        const allTable =`${i} * ${j} = ` + i * j; 
        console.log("allTable ::",allTable);
    }
}
