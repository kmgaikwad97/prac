// Apply, Call & Bind in JS

// Problem statement

let userDetails = {
    name:'Kshitij Gaikwad',
    Age:28,
    Designation:"Software Developer",
    // This points the object, properties of the object like name age etc.
    printDetails:function(){
        console.log(this.name);
    }
}
userDetails.printDetails();

let userDetails2 = {
    name:'Vicky Gaikwad',
    Age:26,
    Designation:"FullStack Developer",
}
userDetails.printDetails.call(userDetails2);

// function borrowing 