function findMax(mat) {
  let max = [];
  for (let i = 0; i < mat.length; i++) {
    let maxelement = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] > maxelement) {
        maxelement = mat[i][j];
      }
    }
    max.push(maxelement);
  }

  return max;
}

let mat = [
  [2, 14, 15, 16],
  [56, 45, 34, 12, 78],
  [44, 78, 43, 22],
  [7, 22, 109, 67],
];

console.log(findMax(mat));
