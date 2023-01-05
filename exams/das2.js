/*Smallest array
Question Name: Smallest Array
Problem Statement
You are given an integer X. You have to print the smallest array such that
the sum of all the elements of this array = X
the maximum element of the array is at most 104.
All elements of the array are distinct.
Array A is called smaller than array B if :
Length of A is less than length of B.
Else if length of A = length of B, then the first element where array A and B differ should be smaller in array A.
Input Format
First line contains a single integer denoting X.
Output Format
Print the smallest array which satisfies the given conditions. If there are no possible array print “-1”.
Constraints
1<=X<=10^9
Sample Input 1
10098
Sample Output 1
98 10000
Explanation of Sample 1
Sum of array elements = 98 + 10000 = 10098.
Also it can be proved that this is the smallest possible array.*/
function smallestArray(x)
{
let arr = [];
  if(x<10){
    let a = parseInt(x/10);
    let b = parseInt(x-a);
    arr.push(a);
    arr.push(b);
  }else if(x<100 && x>10){
    let a = parseInt(x/10);
    let b = parseInt(x-a);
    arr.push(a);
    arr.push(b);
  }else if(x<1000 && x>100){
    let a = parseInt(x/100);
    let b = parseInt(x-a);
    arr.push(a);
    arr.push(b);
  }else if(x<10000 && x>1000){
    let a = parseInt(x/1000);
    let b = parseInt(x-a);
    arr.push(a);
    arr.push(b);
  }else if(x<100000 && x>10000){
    let a = parseInt(x/10000);
    let b = parseInt(x-a);
    arr.push(a);
    arr.push(b);
  }

  return arr;
}
let x = 10098;
console.log(smallestArray(x));