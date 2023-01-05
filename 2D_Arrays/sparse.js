let arr1 = [
  [1, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 5, 0, 7],
  [9, 4, 7, 0],
];
let size = arr1[0].length * arr1.length;
console.log(size);
function sparse(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {    
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 0) {
        count++;
      }
    }
  }
if (count > (0.5*size)){
    console.log("It is an Sparse Array");
} else{
    console.log("It is not an Sparse Array");
}
}
sparse(arr1);