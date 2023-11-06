// function pytha(num){
//     let tipplet = []
//     for(let a=1; a <= num; a++){
//         for(let b = a+1; b <= num ;b++){
//             let c = Math.sqrt(a*a+b*b)
//             // console.log("c :sqrt:",c);
//             if(c === Math.floor(c) && c <= num){
//                 tipplet.push([a,b,c])
//             }
//         }
//     }
//     console.log("tripplets :",tipplet);
//     return tipplet
// }
// num =20;
// console.log(pytha(num));



// My Simplified Solution

// a^2 + b^2 = c^2

let tripplets = []
let data;
function pytha(number){
    // console.log(number);
    const usedCValues = new Set(); // To store unique c values
    for(let a=1;a<=number;a++){
        for(let b=1; b<=num;b++){
            // console.log(a,b,"a and b ");
            let c = Math.sqrt(a*a+b*b) 
            // console.log("the output is here ::",c);
            if(c === Math.floor(c) && c <= num && !usedCValues.has(c)){
                console.log("usedCValues ::",usedCValues);
                usedCValues.add(c);
                tripplets.push([a,b,c])
            }
        }
    }
    console.log(tripplets);
    for(let i=0;i<tripplets.length;i++){
       let step1 = `${tripplets[i][0]}^2 + ${tripplets[i][1]}^2 = ${tripplets[i][2]}^2`
    //    console.log(step1);
        data = 
        `${tripplets[i][0]}` * `${tripplets[i][0]}` + "+" +  
        `${tripplets[i][1]}` * `${tripplets[i][1]}`  + "="  +  
        `${tripplets[i][2]}` * `${tripplets[i][2]}`

        // console.log(data,"dataa");

        let output =  `${tripplets[i][0]}` * `${tripplets[i][0]}` +  
        `${tripplets[i][1]}` * `${tripplets[i][1]}`  + "="  +  
        `${tripplets[i][2]}` * `${tripplets[i][2]}`
        // console.log(output,"hence proved output");
    }
    return tripplets
}
let num = 20
console.log(pytha(num));


