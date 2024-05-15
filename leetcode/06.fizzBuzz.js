var fizzBuzz = function(n) {
    const number = []
    for(i = 1; i <= n; i++){
        let iString = i.toString()
            if(i % 3 === 0 && i % 5 === 0) {
                number.push("FizzBuzz")

            }else if (i % 5 === 0) {
                number.push("Buzz")

            }else if(i % 3 === 0){
                number.push("Fizz")
            }
            else{
                number.push(iString)
            }
    }
    return number;
};

console.log(fizzBuzz(3))