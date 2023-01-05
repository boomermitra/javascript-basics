function x(){
    var a = 10;
    function y(){
        console.log(a);
    };
    return y;
}
let d = x();
console.log(d);
x()();
d();
