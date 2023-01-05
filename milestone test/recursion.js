let arr = [4,6,45,56,3,7,8];
let n = arr.length;
function countOddNumbers(arr, n){
    let temp=0;
    for (let i = 0; i < n; i++){
        if(arr[i]%2==0) temp++;
    }
    return temp;
}
console.log(countOddNumbers(arr,n));