console.log("Login data given")
function login(email,password,callback){
    setTimeout(()=>{
        callback(email);
    },3000)
}
const user = login("ashu","12345", user =>{
console.log(user);
});
//console.log(user);
console.log("finished");