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




function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    var maxDiv = Math.sqrt(n);
    
    for(var i = 2; i <= maxDiv; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    
    return true;
}

console.log(0, " is prime? ", isPrime(0));
console.log(2, " is prime? ", isPrime(2));
console.log(3, " is prime? ", isPrime(3));
console.log(4, " is prime? ", isPrime(4));
console.log(5, " is prime? ", isPrime(5));
console.log(21, " is prime? ", isPrime(21));
console.log(27, " is prime? ", isPrime(27));