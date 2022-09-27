let arr = [4, 2, -1, -4, 6, 3, -2, 8, -8];
let n = arr.length;
//arr.sort((a, b) => b - a);
//console.log(arr);
let pos = [];
let neg = [];

for (let i = 0; i < n; i++) {
  if (arr[i] > 0) {
    pos.push(arr[i]);
  } else {
    neg.push(arr[i]);
  }
}
console.log(pos);
console.log(neg);
let res = [];

let k =0;
let l = 0;
for(let i = 0; i<n; i++){    
        if(i%2==0){
            res.push(pos[k++]);
        }else{
            res.push(neg[l++]);
        }
    
}

console.log(res);
