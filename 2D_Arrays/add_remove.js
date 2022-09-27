var arr1 = [['Ashu', 28, 'Male'], ['Ankit', 23, 'Male'], ['Abhinav', 32, 'Male']];
arr1.push(['Shantanu', 26]);
console.log(arr1);
console.log('_____________');

arr1[3].push('Male');
console.log(arr1);
console.log('_____________');

// arr1.pop();
// console.log(arr1);
// console.log('_____________');

// arr1[1].pop();
// console.log(arr1);
// console.log('_____________');

arr1.splice(2,1); // Removing Abhinav's data
console.log(arr1);
console.log('_____________');
arr1.splice(2,0,['Abhinav', 32, 'Male']); // Adding Abhinbav's Data
console.log(arr1);
console.log('_____________');
arr1[1].splice(1,1); //Removing Ankit's Age
console.log(arr1);