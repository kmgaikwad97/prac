
// Problem 1: Create an empty array
// Solution 1
var emptyArray = [];
// Solution 2 (using the Array constructor)
var emptyArray = new Array();

// Problem 2: Add elements to an array
const fruits = ['apple', 'banana', 'cherry'];
// Solution 1: Using push()
fruits.push('orange');
// Solution 2: Using the length property
fruits[fruits.length] = 'grape';
console.log(fruits); // ['apple', 'banana', 'cherry', 'orange', 'grape']


// Problem 9: Sort an array
const numbers = [5, 2, 9, 1, 5, 6];
// Solution (ascending order)
const data = numbers.sort(function (a, b){
    console.log(a,'data of a');
    console.log(b,'data of b');
    a - b
});
// console.log(data,"daattaa");
console.log(numbers); // [1, 2, 5, 5, 6, 9]
