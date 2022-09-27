function columnWiseSum(mat, m, n) {
  let sum = [];
  
  for (let j = 0; j < n; j++) {
    let res = 0;
    for (let i = 0; i < m; i++) {
      res += mat[i][j];
    }
    sum.push(res);
  }
  return sum;
}

let arr = [
  [3, 4, 5],
  [3, 4, 2],
  [2, 3, 4],
  [4, 4, 4],
];

console.log(columnWiseSum(arr, 4, 3));
