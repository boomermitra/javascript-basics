let arr = [0, 1, 0, 0, 1, 0, 1, 1, 1, 0];

function sortArray(arr) {
  let n = arr.length;
  let temp = 0;
  let j = 0;
  for (let i = 0; i < n; i++) {
       if (arr[i] == 0) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      
      j++;
    }
  }
  return arr;
}
console.log(sortArray(arr));
