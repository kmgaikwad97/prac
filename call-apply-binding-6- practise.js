// call   = The call method allows you to invoke a function with a specific this context and a list of arguments passed individually.
// apply = The apply method is similar to call, but it takes the arguments as an array. This can be useful when you have a function that accepts an array of arguments. 

const data1={
    name:"Kshitij",
    age:25,
}
let finalData = function(city,town,direction){
    
    console.log(`${this.name} is livees in ${town}(${direction}) ${city} `);
}
finalData.call(data1, "mumbai","bandra","east")
finalData.apply(data1, ["mumbai","bandra","east"])

const data2 = {
    name:"Vicky",
    age:23,
}

finalData.call(data2,"thane","kharegaon","west")
finalData.apply(data2,["thane","kharegaon","west"])