/*Odd Subset

Question Name: Odd Subset

Problem Statement

Antonio got an array for his Christmas present. The array he got consists of N positive integers.

He was getting bored on Christmas eve and decided to solve the below problem to overcome his boredom :

What’s the maximum length subset of the given array such that the sum of all elements of this subset is an odd number.
Antonio got stuck in the problem and has a party to attend at night. Hence you, being Antonio’s best friend decided to help him solve the problem.

Given array A, print the maximum possible length of the subset of this array such that the sum of all elements of this subset is an odd number. If there is no such subset print “-1”(without quotes) instead.

A subset of the array A as a tuple that can be obtained from A by removing some (possibly all) elements of it.

Input Format

First line contains a single integer denoting N.
Next line contains N space separated integers denoting the elements of array A.
Output Format

Print the maximum possible length of the subset of the given array such that the sum of all elements of this subset is an odd number
Constraints

1<=N<=105
1<=Ai<=109
Sample Input 1

4

4 2 3 1

Sample Output 1

3

Explanation of Sample 1

One can select the subset as [4 2 3 1]. The sum of all elements of this subset = 4+2+1 = 7 which is odd.*/

function (arr, n){
   let odd = 0;
   let even = 0;
   for(let i=0; i<n; i++){
    if(arr[i]%2){
        odd++
    }else{
        even++
    }
   }
   if(odd == 0){
    return -1
   }
   if(odd%2){
    return even+odd
   }
   return even+odd-1
}