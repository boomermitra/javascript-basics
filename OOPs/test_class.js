//using object literal

// const testObject = {
//     name : "Ashutosh",
//     age : 29,
//     occupation : "Web Developer",
//     outupt : function(){
//         console.log(`${this.name} is ${this.age} years old, and is a ${this.occupation}` )
//     }
// }
// testObject.outupt();

//using Instance of an Object

    // const person1 = new Object({
    //   name: "Ashutosh",
    //   age: 29,
    //   location: "Bangalore",
    //   output: function () {
    //     console.log(`${this.name} is ${this.age} years old, and lives in ${this.location}`);
    //   },
    // });
    // console.log(person1.name);
    // console.log(person1);
    // console.log(person1.output());

//using Constructor function
function Laptops(brand,price,processor,ram){
  this.brand = brand;
  this.price = price;
  this.processor = processor;
  this.ram = ram;
  this.getinfo = function(){
      console.log(`This is a ${this.brand} laptop with ${this.processor} processor, ${ram} RAM, that costs ${this.price}`)
  }
};
const lappy1 = new Laptops("Dell", "Rs. 40,000", "i5", "4 GB");
console.log(lappy1);
lappy1.getinfo();
console.log(lappy1.ram)

const lappy2 = new Laptops("Asus", "Rs. 50,000", "i5", "8 GB");
console.log(lappy2);
lappy2.getinfo();
console.log(lappy2.ram)