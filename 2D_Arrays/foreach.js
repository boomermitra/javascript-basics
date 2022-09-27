var arr1 = [
    ['Ashu', 28, 'Male'], 
    ['Ankit', 23, 'Male'], 
    ['Abhinav', 32, 'Male']
            ];

// arr1.forEach((x)=>{
//     x.forEach((y) => {console.log(y);})
// });

for(let i of arr1){
    console.log(i);
    for(let j of i){
    console.log(j);
    }
}