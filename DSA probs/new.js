//https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/
var maxProductDifference = function(nums) {
    // [5,6,2,7,4]->[2,4,5,6,7]
    let arr=nums,n=nums.length;
    arr=arr.sort((a,b)=>a-b);
    return arr[n-1]*arr[n-2]-arr[1]*arr[0];
};