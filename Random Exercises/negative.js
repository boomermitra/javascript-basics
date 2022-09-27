let arr = [4, 2, -1, -4, 6, 3, -2, 8, -8];
let n = arr.length;
let temp;
let j = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] > 0) {    
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
}
console.log(arr);
