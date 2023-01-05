

var countPairs = function(nums, k) {
    let cnt=0;
    nums.forEach((e,i)=>{
        nums.forEach((el,j)=>{
            if(i<j&&e===el&&(i*j)%k===0) cnt++;
        })
    })
    return cnt;
};

console.log(countPairs([3,1,2,2,2,1,3],2))