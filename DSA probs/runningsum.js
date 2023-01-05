function runningSum(arr){    
    for(let i=0; i<arr.length-1; i++){
    let temp = arr[i]+arr[i+1]; 
    arr[i+1]=temp; 
}
return arr;

}

console.log(runningSum([1,2,3,4]))

/*var runningSum = function(nums) {
    let sum=0;
    let arr=[]
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        arr.push(sum)
    }
    return arr
};*/