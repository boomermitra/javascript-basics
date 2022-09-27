let a = 5;
let str;
for (let i = 1; i <= a; i++) {
  str = "";
  for (let j = 1; j <= a; j++) {
    if (i == 1 || i == a || j == 1 || j == a) {
      str += "*";
    } else {
    str += " ";
    }

  }
  console.log(str);
}
