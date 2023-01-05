//https://leetcode.com/problems/flipping-an-image/

var flipAndInvertImage = function(arr) {
    // 1. reverse each row
    // 2. replace 0 with 1 and 1 with 0
    let img=arr;
    img.forEach((e)=>{
        e.reverse();
        for(let i=0;i<e.length;i++){
            e[i]=1-e[i]; // e[i]=1:e[i]=1-1=0
        }
    })
    return img;
};