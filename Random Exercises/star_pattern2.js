let n = 5;
for(let i=0; i<n; i++){
    let str = "";
    let space = " ";
    for(let j = 0; j<n; j++){
       while(n<3){
        if(j==1||j==2||j==3){
            str += space;
        }else {
            str += "*"
        }
        
    }
}
    console.log(str);
}