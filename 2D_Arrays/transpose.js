//Given an input matrix, find out its transpose matrix

function transpose(mat) {
  //checking if r=c
  let r = mat.length;
  let c = mat[0].length;
  let transMat = [...Array(c)].map((e) => Array(c));
  // let transMat = new Array(c);
  // for(let i = 0; i<c; i++){
  //   transMat[i] = new Array(c);

  //console.log(transMat);

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      transMat[j][i] = mat[i][j];
    }
  }

  return transMat;
}

let input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(transpose(input));
