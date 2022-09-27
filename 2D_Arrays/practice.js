let rows = 6;
let column = 6;
let newMat = new Array(rows);
for(let i = 0; i<rows; i++){
  newMat[i] = new Array(rows);
}
console.log(newMat);
let count = 0;
for(let i=0; i<rows; i++){
  for(let j=0; j<rows; j++){
  newMat[i][j]=count++;
  }
}
console.log(newMat);


let arr2 = new Array(3);
for(let i = 0; i<6; i++){
  
  arr2[i] = new Array(3);
}

console.log(arr2);

function printEven(mat){
  let x = 0;
  
  for(let i = 0; i<mat.length; i++){
    let y = 0;
    for (let j = 0; j<mat[i].length; j++){
      if(mat[i][j]%2==0){       
        arr2[x][y] = mat[i][j];
        y++;
      }
       
      
      
    }
    
    x++;
  
  }
  return arr2;
}

console.log(printEven(newMat));