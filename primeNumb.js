// function isPrime(n) {
//     // Check if the number is less than 2, which cannot be prime
//     if (n < 2) {
//       return false;
//     }
    
//     // Special case: 2 is a prime number
//     if (n === 2) {
//       return true;
//     }
  
//     // To check if a number is prime, we only need to test divisors up to its square root
//     var maxDivisor = Math.sqrt(n);
  
//     // Start checking for divisors from 2 and go up to the square root
//     for (var i = 2; i <= maxDivisor; i++) {
//       // If n is divisible by i (i.e., the remainder is 0), it's not prime
//       if (n % i === 0) {
//         return false;
//       }
//     }
  
//     // If no divisors were found, the number is prime
//     return true;
//   }
  
//   // Testing the function with some numbers
//   console.log(2, " is prime? ", isPrime(2)); // Output: 2 is prime? true
//   console.log(3, " is prime? ", isPrime(3)); // Output: 3 is prime? true
//   console.log(4, " is prime? ", isPrime(4)); // Output: 4 is prime? false
//   console.log(5, " is prime? ", isPrime(5)); // Output: 5 is prime? true
//   console.log(9, " is prime? ", isPrime(9)); // Output: 9 is prime? false


// function findPythagoreanTriplets(limit) {
//     const triplets = [];
  
//     for (let a = 1; a <= limit; a++) {
//         console.log("a,b",a );
//       for (let b = a + 1; b <= limit; b++) {
//         console.log(b ,"b os jere", "== ++=======",a * a + b * b);
//         const c = Math.sqrt(a * a + b * b);
//         console.log("c valu",c);
//         if (c === Math.floor(c) && c <= limit) {
//             console.log("a,b,c,", a,b, c);
//           triplets.push([a, b, c]);
//         }
//     }
// }
// console.log("triplets ::::",triplets);
  
//     return triplets;
//   }
  
//   // Find Pythagorean triplets with a limit (e.g., 20)
//   const limit = 20;
//   const triplets = findPythagoreanTriplets(limit);
  
//   // Print the Pythagorean triplets
//   console.log(`Pythagorean Triplets with a limit of ${limit}:`);
//   triplets.forEach((triplet) => {
//     console.log(triplet.join(', '));
//   });
  
let primeOrNot = true
function isPrime(num){
    console.log(num);
    for(i=2;i<num;i++){
        if(num%2===0){
            console.log(`${num} is not a prime number`);
            primeOrNot = false
        }
    }
    if(primeOrNot === true){
        console.log(`${num} is a prime number`);
    }else{
        console.log(`${num} is not a prime number`);
    }
}
number = 4;
isPrime(number);