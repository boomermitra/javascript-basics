let arr = [
    [ 1, 2, 3, 4 ],
    [ 5, 6, 7, 8 ],
    [ 9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ],
    [ 17, 18, 19, 20 ]
  ];

  let result = [];

  let top = 0;
  let left = 0;
  let right = arr[0].length-1;
  let bottom = arr.length-1;

  let size = arr.length*arr[0].length;

  while(result.length<size){

    for(let i = left; i<=right; i++){
        result.push(arr[top][i]);
    }
    top++;
    for(let i = top; i<=bottom; i++){
        result.push(arr[i][right]);
    
    }
    right--;

    for(let i = right; i>=left; i--){
        result.push(arr[bottom][i]);
    }
    bottom--;

    for(let i = bottom; i>=top; i--){
        result.push(arr[i][left]);
    }
    left++;
  }

  console.log(result);