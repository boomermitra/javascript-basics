/*Requirements: "Write a program to define a class “Shape”. This class will have the properties length, breadth and height.
Create a parameterised constructor that takes input as length, breadth and height. Define a method area()
inside the class and it should return value as length*breadth*height.
Create an Object of shape class and call the area() method to fetch the area." */

class Shape{
    length;
    breadth;
    height;

    constructor(length,breadth,height){
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }

    area = function(){
        return this.length*this.breadth*this.height
    }
}

const shape1 = new Shape(10,2,5);
console.log(shape1);
console.log(shape1.area());