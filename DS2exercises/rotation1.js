//rotate an array in a clockwise direction for 'n' times

function rotate(arr,n){
   
    while(n){       
        arr.unshift(arr[arr.length-1]);
        arr.pop();
        n--;
    }
    return arr; 
}
let arr = [1,2,3,4,5,6];
let n = 3;
console.log('the resulting array after '+n+' rotations is '+ rotate(arr,n));