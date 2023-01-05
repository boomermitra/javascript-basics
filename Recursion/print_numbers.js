//recursive function to print numbers in increasing order
function printDec(n){
    if(n==1){
        console.log(1);
        return;
    }
    printDec(n-1);
    console.log(n);
}
printDec(50);