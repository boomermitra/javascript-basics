// prime 2nd way
 
for(let i = 2; i <= 30; i++) {
	let count = 1;
  for(let j = 2; j <= i; j++) {
  	if(i%j == 0) {
    	count = count + 1;
    }
  }
  if(count == 2) {
  	console.log(i);
  }
}