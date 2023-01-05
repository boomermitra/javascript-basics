//Map Function
//To transform each and every elements in an array and return a new array
//1)double each elements
const arr = [1, 4, 2, 7, 6];
const double = arr.map((x) => {
  return x * 2;
});
console.log(double);

//2) Take an array of numbers and make them strings
const strings = arr.map((x) => {
  return x.toString();
});
console.log(strings);

//3.Capitalize each of an array of names
const names = ["ashu", "Raghav", "anKIT", "ashuTosh", "ABHInaV"];
const capNames = names.map((x) => {
  return x[0].toUpperCase() + x.slice(1).toLowerCase();
});
console.log(capNames);

//4. Make an array of strings of the names
const data = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

const nameOnly = data.map((x) => {
  return x.name;
});

console.log(nameOnly);
//5. Make an array of strings of the names saying whether or not they can go to The Matrix (age<18)

const matrix = data.map((x) => {
    return (x.age>18)?`${x.name} can go to the matrix` : `${x.name} is underage`
})
console.log(matrix)