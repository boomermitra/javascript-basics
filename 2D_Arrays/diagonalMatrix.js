function checkDiagonal(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j=0; j<arr[0].length; j++){
            if(arr[i][j] != 0 && arr[i]!=arr[j]){
                return false;                       
            }                
            
        }
    }
    return true; 
}

let arr = [ 
    [1,0,0,0],
    [0,2,0,0],
    [0,0,1,0],
    [0,0,0,5] 
];
console.log(checkDiagonal(arr));