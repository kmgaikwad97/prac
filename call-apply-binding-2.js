// Apply, Call & Bind in JS
let userDetails = {
    name:'Kshitij Gaikwad',
    Age:28,
    Designation:"Software Developer",
}
let printDetails=function(){
    console.log(this.name);
}
printDetails.call(userDetails,"Delhi")
// userDetails.printDetails();

let userDetails2 = {
    name:'Vicky Gaikwad',
    Age:26,
    Designation:"FullStack Developer",
}
printDetails.call(userDetails2,"Delhi");
