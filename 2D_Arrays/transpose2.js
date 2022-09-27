
let mat = [
    [1,2,3,4,5],
    [6,7,8,9,10]
];
let r = mat.length;
let c = mat[0].length;
console.log(r);
console.log(c);
let transmat = [...Array(c)].map(e=>Array(r));
console.log(transmat);

for(let i=0; i<r; i++){
    for(let j=0; j<c; j++){
        transmat[j][i] = mat[i][j];
    }
}
console.log(transmat);