/*input: 12345
output:1+2+3+4+5=15=> 1+5=>6  (until the output get single digit) */

function singleDigitSum(num){
    let remainder = 0;
    let sum = 0;
    while (num){        
        remainder = num % 10;
        sum = remainder + sum;
        num = parseInt(num/10)  }
    if (sum > 9){
        
    }
return sum;
}


console.log(singleDigitSum(12345))