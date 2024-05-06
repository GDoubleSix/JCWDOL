// Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz"

// parameters: n -> total looping
//     - Example: n = 6 -> 1, 2, Fizz, 4, Buzz, Fizz
//     - Example: n = 15 -> 1,2,fizz,4,buzz,fizz,7,8,Buzz,11,Fizz,12,13,14,FizzBuzz

const inputNumber = (multiples) => {
    const number = []
    for(i = 1; i <= multiples; i++){
        if(i % 3 === 0 && i % 5 === 0) {
            number.push("FizzBuzz")

        }else if (i % 5 === 0) {
            number.push("Buzz")

        }else if(i % 3 === 0){
            number.push("Fizz")
        }
        else{
            number.push(i)
        }
    }
    return number;
}
console.log(inputNumber(40));
