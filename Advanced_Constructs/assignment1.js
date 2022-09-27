/*Write a program to multiply the value in the given array 
and return a result (use array functions)*/

function multiplyValue(arr){
let result = arr.reduce((a,b)=>a*b);
return result;
}

let arr = [2,3,4,5,6,7,8];
console.log(multiplyValue(arr));