function rotateanti90(mat){
let r = mat.length;
let c = mat[0].length;
    if(r === 1){
        for(let i=0; i<r; i++){
            for(let j=0; j<c; j++){
                mat[i][0] = mat[0][j];
            }
        }
    } else if (r === 2){
        for(let i=0; i<r; i++){
            for(let j=0; j<c; j++){
                mat[i][1] = mat[1][j];
            }
        }
    } else {
        for(let i=0; i<r; i++){
            for(let j=0; j<c; j++){
                mat[i][2] = mat[2][j];
            }
        }
    }

    return mat;
}

let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(mat);
console.log(rotateanti90(mat));