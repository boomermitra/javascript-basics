//Function sumOfDigits
//param - (number)
//return - sum of digits of that number
//input 1 -> 234  -> 9
//787 -> 22 -> 4

function sumOfDigits(number){
    let result = 0;
    while(number && result>9){
    result = result + number%10;
    number = parseInt(number/10);
    }
    return result;

}
console.log(sumOfDigits(2345))