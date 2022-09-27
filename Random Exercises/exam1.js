let n = parseInt(readline());
	while(n--)
   {
      let arr = [];
	arr = readline().split(" ");
	var a = arr[0];
	var b = arr[1];
	var c = arr[2];
      var l;
    if((a>b && a<c) && (a<b && a>c)){
        l=a;
    }else if((b>c && b>a) && (b>c && b<a)){
        l=b;

       }else{
        l=c;
       }
       console.log(l);
    }