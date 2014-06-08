function factorial(x){

  var x;
  for(i=x; i>2; i--) {
    x = x*(i-1);
  }
return x;
}

console.log(factorial(5))