/*Move all negative numbers to the end and positive to the beginning of the array without using any predefined
sorting method.*/

let arr = [-12,45,-98,46,-89,3,6,-7];
function arrsort(arr){
    for(let i = 0; i < arr.length-1; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i]<arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
    }
    return arr;
}

console.log(arrsort(arr));