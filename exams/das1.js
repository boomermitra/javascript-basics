/*Alex has an integer array A, of size N.
Each element in the array represents the color of balloons Alex has. 
(Same integer representing same color balloon, while different integer representing a different color balloon).
Now, Alex needs to select M consecutive balloons, such that he gets the maximum number of distinct color balloons.
Input Format
First line contains two integers representing N, and M respectively.
Second line contains integers representing array A.

Sample Input 1
5 3
3 1 1 2 3

Sample Output 1
3
*/
function moreTheMerrier(arr, n, m){

   for(let i=0; i<n; i++){
    let newArr=[];
    let newArr2=[];
    for(let j=0; j<=m; j++){
        
        if(arr[j] == arr[j+1]){
            newArr2.push(arr[j])
        }else{
            newArr.push(arr[j]);
        }
        
    }
    return newArr.length;
   }
}

var arr = [3,1,1,2,3];
var n = arr.length;
var m = 3;
console.log(moreTheMerrier(arr, n, m))