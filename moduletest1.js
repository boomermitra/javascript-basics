
const t = parseInt(readline());


function sixFriends () {
for (let i = 1; i<=t; i++) {
let arr = readline().split(" "); // splitting the double room and triple room charges
let x = a[0]; // charge of a double room
let y = a[1]; //charge of a triple room

let priceofdoubleroom = x*3 //3 double rooms for 6 people
let priceoftripleroom = y*2 //2 triple rooms for 6 people

(priceofdoubleroom > priceoftripleroom )?console.log(priceoftripleroom):console.log(priceofdoubleroom)
}
}


sixFriends();