//Even positioned elements should be greater than the odd positioned elements
//i/p - [1,3,2,2,5] o/p - [1,3,2,5,2]

let arr = [1,3,2,2,5];
arr.sort((a,b)=>b-a); // sorting in descending order
console.log(arr);
let newarr = [];
let p = 0;
let n = arr.length
let q = n-1;
for(let i = 0; i<n; i++){
    if((i+1) % 2 == 0){
        newarr[i] = arr[p++];
    }else {
        newarr[i] = arr[q--];
    }
}
console.log(newarr);