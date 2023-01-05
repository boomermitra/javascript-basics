//Creating objects using classes
//class is a blueprint of a real-life entity such as object
//class defines the characteristics of an object like color,shape,size,etc.

class Laptop {
  // > naming a class 'Laptop' with capital first letter
  brand; // > defining the properties / charateristics of objects in this class
  processor;
  ram;

  constructor(brand, processor, ram) {
    this.brand = brand;
    this.processor = processor;
    this.ram = ram;
  }

  getinfo() {
    console.log(
      `It is a ${this.brand} laptop with ${this.processor} processor and ${this.ram}GB RAM`
    );
  }
}

const lappy1 = new Laptop("Dell", "i5", "4");
console.log(lappy1)
