function checkSorted(arr, n) {
  if (n==1) return true;

  if (arr[n-1]<arr[n-2]) return false;

  return checkSorted(arr, n-1);
}

let arr = [1, 3, 4, 8, 9, 34, 67];
let n = arr.length;

console.log(checkSorted(arr, n));
