function highestNumb(val){
    let maxNum = val[0]
    for(let i = 0;i<val.length;i++){
        // console.log(val[i]);
        // console.log("maxNum :",maxNum);
        if(maxNum < val[i]){
            maxNum = val[i]
        }
    }
    return maxNum
}
let arr = [2,4,6,7,2,12,4,6,7,8,3]
console.log(highestNumb(arr));