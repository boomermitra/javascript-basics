//Spiral matrix
function spiralOrder(matrix) {
    
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let left = 0;
    let result = [];
    let size = matrix.length * matrix[0].length;

        while (result.length < size) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        for (let i = right; i >= left; i--) {
            result.push(matrix[bottom][i]);
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            result.push(matrix[i][left]);
        }
        left++;


    }
    return result;
}

console.log([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20]]);
console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20]]));