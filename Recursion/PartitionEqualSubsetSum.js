var arr = [1,5,11,5];
var n = arr.length;
var result = (arr.reduce((a,b)=>a+b))/2;
//console.log(result);

const PartitionEqualSubset=(arr,n,result)=>{
    
    if(n===0) {
        if(result===0 || result===arr[n]) return true;
        return false;
    }
    let notPick = PartitionEqualSubset(arr,n-1,result), pick=0;
    if(arr[n]<=result) pick= PartitionEqualSubset(arr,n-1,result-arr[n]);
    return notPick|pick;
}

console.log(PartitionEqualSubset(arr,n,result))