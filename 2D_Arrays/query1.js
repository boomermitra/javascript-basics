let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
];

function wave(arr){
    for (let i = 0; i<arr[0].length; i++){

    if(i % 2 == 0){
        for(let j = 0; j<arr.length; j++){
            console.log(arr[j][i]);
        }
    }else{
        for(let j = arr.length-1; j>=0; j--){
            console.log(arr[j][i]);
        }
    }
}
}
wave(arr);