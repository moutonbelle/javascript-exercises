const fibonacci = function(n) {
    let num = Number(n);
    if(num < 0) return "OOPS";
    else if(num === 0) return 0;
    else if(num === 1) return 1;
    else return fibonacci(n-1) + fibonacci(n-2);
};

// Do not edit below this line
module.exports = fibonacci;
