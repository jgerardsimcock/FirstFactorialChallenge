function factorial(x){
    var z=1
    if (x<=1) return 1;
    for(var i=2; i<=x; ++i)
    z *= i;
    return z;
}

console.log(factorial(5))