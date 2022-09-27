//compare two objects without using functions

function compareObjects(obj1,obj2){
    if (Object.entries(person1).toString() === Object.entries(person2).toString()){
        return true;
    }else {
        return false;
    }
}

let person1 = {
    name : "Ashutosh",
    type : "Student",
    batch : 10,
    course: "FED"
};

let person2 = {    
    type : "Student",
    name : "Ashutosh",
    batch : 10,
    course: "FED"
};

console.log(compareObjects(person1,person2));
