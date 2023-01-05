//https://leetcode.com/problems/number-of-laser-beams-in-a-bank/description/

var numberOfBeams = function(bank) {
    let arr=[];
    bank.forEach((s)=>{
        let sarr=s.split('');
        let cnt=0;
        sarr.forEach((e)=>{
            if(e==='1') cnt++;
        })
        if(cnt) arr.push(cnt);
    })
 
    let beams=0;
 
    for(let i=1;i<arr.length;i++){
        beams+=(arr[i]*arr[i-1]);
    }
    return beams;
};
