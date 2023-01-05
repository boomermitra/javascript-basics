//Find the length of a string using recursion

function lengthOfString(str) {
  if (str == "") {
    return 0;
  }
  let res = lengthOfString(str.substring(1));
  return 1 + res;
}
console.log(lengthOfString("ashutosh mitra"));
