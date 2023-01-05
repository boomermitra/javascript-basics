function printFibbo(n){
    if(n==0 || n==1){
        return n;
    }
    return printFibbo(n-1)+printFibbo(n-2)
}

for(let i=0; i<=10; i++){
    if(printFibbo(i)<50){
    console.log(printFibbo(i))
    }
}