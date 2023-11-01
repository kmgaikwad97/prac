// JS OPERATOR  typeOf

// Solution 1
const emptyArray1 = [1,2];
console.log(typeof emptyArray1);

// Solution 2 (using the Array constructor)
const emptyArray2 = new Array();
console.log(typeof emptyArray2);

// typeof does not differentiate between arrays and plain objects.


// String
// Number
// BigInt
// Symbol
// Boolean
// undefined
// null

let one = 1;
console.log("one 1",typeof(one));
one = 'one';
console.log("one 2",typeof(one));
one = true;
console.log("one 3",typeof(one));
one = Boolean(false);
console.log("one 4",typeof(one));
one = String('It is possible');
console.log("one 5",typeof(one));


// the String constructor only accepts a single argument, so it will use the first argument
const data = String('my name is kshitij',"string stirng")
console.log(data,"datatatata");

const a = Array('123',123)
console.log(a,"aaaa");

const b = Boolean(false,true,true)
console.log(typeof b,"aaaa");

// the Number constructor only accepts a single argument, so it will use the first argument, which is true.
const c = Number(true,true,true) //convert true into number = 1, if false = 0

console.log(c,"aaaa"); //so c = 1
console.log(typeof c,"aaaa"); // c = Number 
console.log(isNaN(c),'number ?'); // false = bcoz it is a number 


const abc = Symbol('a')

// const sym2 = Symbol("foo");
// console.log(sym2,"sym2");

console.log(typeof(typeof 7)); //string 

const aa = typeof 7
console.log(aa,"ssdf"); // 'number'
console.log(typeof(aa),"ssdf"); // string

console.log(typeof(999-3223),'999-3223'); // this is number
console.log(typeof 999-3223,'999-3223'); //first typeof 999 will result in a string, "number". The expression "number" - 32223 results in NaN

