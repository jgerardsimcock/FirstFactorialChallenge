function factorial(x){
  
  var y= x;
  for(i=x; i>2; i--) {
    y = y*(i-1);
  }
return y;
}

console.log(factorial(5))