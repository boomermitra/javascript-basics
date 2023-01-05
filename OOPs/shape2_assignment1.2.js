/* Write a program to define a class “Shape”. This class will have the private properties length, breadth and
height. Create setter and getter methods for all the private properties. Define a method area() inside the
class and it should return value as length*breadth*height.
Create an Object of shape class and call the area() method to fetch the area.*/
class Shape{
    #length;
    #breadth;
    #height;

    setLength(length){
    this.#length = length;
    }
    getLength(){
    return this.#length;
    }
    setBreadth(breadth){
    this.#breadth = breadth;
    }
    getBreadth(){
    return this.#breadth;
    }
    setHeight(height){
    this.#height = height;
    }
    getHeight(){
    return this.#height;
    }
    area(){
    return this.getLength()*this.getBreadth()*this.getHeight();
    }
    }
    var obj = new Shape();
    obj.setLength(2);
    obj.setBreadth(3);
    obj.setHeight(4);
    console.log(obj.area());