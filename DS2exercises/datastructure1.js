//Write a program to compare Objects without using any in-built function
const obj1 = {
    name: 'Ashutosh',
    age: 29,
    location: 'Ranchi'
};
const obj2 = {
    age: 29,
    location: 'Ranchi'
}
function compareObj(obj1,obj2){
    for(key in obj1){
        if(obj1[key]===obj2[key]){
            console.log(key+ ' has same values in both the objects');
        }else {
            console.log(key+ ' is not same in both the objects');
        }
    }
}

compareObj(obj1,obj2);