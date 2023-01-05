//https://practice.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1

var arr=[3, 34, 4, 12, 5, 2];
var sum=9;
var n=arr.length;
 
const subusetSum=(arr,n,sum)=>{
    if(n===0) {
        if(sum===0 || sum===arr[n]) return 1;
        return 0;
    }
    let nonPick=subusetSum(arr,n-1,sum),pick=0;
    if(arr[n]<=sum) pick=subusetSum(arr,n-1,sum-arr[n]);
    return nonPick|pick;
}
 
console.log(subusetSum(arr,n-1,sum));