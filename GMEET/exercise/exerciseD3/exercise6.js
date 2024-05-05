// Write a function to temove all odd numbers in an array and return a new array that contains even numbers only
// Example : [1,2,3,4,5,6,7,8,9,10] -> [2,4,6,8,10]

const cariBilangan = (inputBilangan) => {
    const bilanganGenap = []
    for (let i = 1; i <= inputBilangan; i++){
        if(i % 2 === 0) bilanganGenap.push(i)
        }
        return bilanganGenap
}
console.log(cariBilangan(10));