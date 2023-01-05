const isPrime = (num) => {
  if (num < 2) {
    return `${num} is not a prime number`;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return `${num} is not a prime number`;
      }
    }
    return `${num} is a prime number`;
  }
};

console.log(isPrime(21));
