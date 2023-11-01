// Apply, Call & Bind in JS
let userDetails = {
    name:'Kshitij Gaikwad',
    Age:28,
    Designation:"Software Developer",
}
let printDetails=function(state, country){
    console.log(this.name + " "+ state + " " + country);
}
printDetails.call(userDetails,"Delhi","India")
// userDetails.printDetails();

let userDetails2 = {
    name:'Vicky Gaikwad',
    Age:26,
    Designation:"FullStack Developer",
}
// call
printDetails.call(userDetails2,"Delhi","India");

// apply
printDetails.apply(userDetails2,["Delhi","India"]);

// bind
let newfun = printDetails.bind(userDetails,"Delhi","India")
newfun()




