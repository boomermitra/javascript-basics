function sumOfArray(arr,n){

    if(n==0){
        return 0;
    }
    return arr[n-1] + sumOfArray(arr,n-1);

}
let arr = [1,2,3,4,5,6,7,8,9,10];
let n = arr.length;
console.log(sumOfArray(arr,n));



// var sum = (array) => (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
// let array1 = [1,2,3,4,5,6,7,8,9,10];
// console.log(sum(array1));