console.log(typeof 0);  //'number'
console.log(typeof +0);  //'number'
console.log(typeof -0);  //'number'
console.log(typeof Math.sqrt(2))  //'number'
console.log(typeof Infinity);  //'number'
console.log(typeof NaN);  //'number', even if it is Not a Number
console.log(typeof Number('100'))  //'number', After successfully coerced to number
console.log(typeof Number('freecodecampt'),"12345")  //'number', despite it can not be coerced to a number

console.log(typeof true) //'boolean'
console.log(typeof false) //'boolean'
console.log(typeof Boolean(0))  //'boolean'

console.log(typeof 12n)  //'bigint'

console.log(typeof '')    //'string'
console.log(typeof 'freeCodeCamp')    //'string'
console.log(typeof `freeCodeCamp is awesome`)  //'string'
console.log(typeof '100')  //'string'
console.log(typeof String(100)) //'string'

console.log(typeof Symbol())  //'symbol'
console.log(typeof Symbol('freeCodeCamp'))    //'symbol'

console.log(typeof {blog: 'freeCodeCamp', author: 'Tapas A'})  //'object';
console.log(typeof ['This', 'is', 101]); //'object'
console.log(typeof new Date());  //'object'
console.log(typeof Array(4));  //'object'

console.log(typeof new Boolean(true))   //'object'; 
console.log(typeof new Number(101))  //'object'; 
console.log(typeof new String('freeCodeCamp'))   //'object';
console.log(typeof new Object,"abcd")   //'object'

console.log(typeof alert,"azxcv")  //'function'
console.log(typeof function (){})   //'function'
console.log(typeof (() =>{}))  //'function' - an arrow function so, parenthesis is required
console.log(typeof Math.sqrt)  //'function'

let a; 
console.log(typeof a)  //'undefined' 
console.log(typeof b)  //'undefined' 
console.log(typeof undefined)  //'undefined'
 
console.log(typeof null)  //'object'


let result = 0/0;
console.log(result,"adfsd");  // returns, NaN