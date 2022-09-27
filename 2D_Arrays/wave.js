function printWave(arr){
for(let i = 0; i<arr[0].length; i++){
    //even column (i)
    //top to down
    if(i%2==0){
        for(let j=0; j<arr.length; j++){
            console.log(arr[j][i]);
        }
    }
    //odd column (i)
    //bottom to top
    else{
        for(let j=arr.length-1; j>=0; j--){
            console.log(arr[j][i]);
        }
    }
    
    
}

}
let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
];

printWave(arr);