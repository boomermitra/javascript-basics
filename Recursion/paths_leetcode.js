//https://leetcode.com/problems/unique-paths-ii/
var m=2;
var n=2;
var arr=[[0,0,0],[0,1,0],[0,0,0]]
// var arr=[[0,1],[0,0]]
function rec(arr,m,n){
    if(m===0 && n===0){
        return 1
    }
   
    var w1=0,w2=0;
    if(m>0 && arr[m-1][n]!=1){
        var w1= rec(arr,m-1,n);
    }
    if(n>0 && arr[m][n-1]!=1 ){
        var w2=rec(arr,m,n-1);
    }
   
    return w1+w2
    
}
console.log(rec(arr,m-1,n-1));