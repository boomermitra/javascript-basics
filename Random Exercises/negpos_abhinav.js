// let arr = [4, 2, -1, -4, 6, 3, -2, 8, -8];
// let n = arr.length;
// //arr.sort((a, b) => b - a);
// //console.log(arr);
// let pos = [];
// let neg = [];

// for (let i = 0; i < n; i++) {
//   if (arr[i] > 0) {
//     pos.push(arr[i]);
//   } else {
//     neg.push(arr[i]);
//   }
// }
// console.log(pos);
// console.log(neg);

const arr = [4,2,-1,-4,6,3,-2,8,-8];
const positive = arr.filter(x => x >= 0);
const negative = arr.filter(x => x < 0);
const res = [];
for
(let i = 0, j = 0; i < positive.length || j < negative.length; i++, j++) {

  if (i < positive.length) res.push(positive[i]);
  if (j < negative.length) res.push(negative[i]);
}
console.log(res);
