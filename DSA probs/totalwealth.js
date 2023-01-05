/* https://leetcode.com/problems/richest-customer-wealth/description/ */

var maximumWealth = function(a) {
    let maxi=0;
    a.forEach((e)=>{
        let sum=e.reduce((a,b)=>a+b);
        maxi=Math.max(maxi,sum);
    })
    return maxi;
};
var accounts = [[1,5],[7,3],[3,5]];
console.log(maximumWealth(accounts))