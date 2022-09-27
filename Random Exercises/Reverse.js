//Given an array of numbers. You need to reverse the array.
let arr = [4,2,8,9,5,1,7];
function reverse(arr){
let left = 0;
let right = arr.length-1;
let n = 0.5*arr.length;
for(left,right ; left<n; left++,right--){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    temp = 0;
}
return arr;
}

console.log(reverse(arr));
