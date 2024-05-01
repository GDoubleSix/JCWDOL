// (4) Write a code to find the sum of the numbers 1 to N
// Example:5 →1+2+3+4+5=15
// Example:3→1+2+3=6

//RUMUS : S= n*(n+1)/2

//cara 1
let inputNumber = 15;
let sum = inputNumber * (inputNumber+1)/2
console.log(sum);


//cara 2
let inputNmbr = 9;
let jumlah = 0;
for (let i = 1; i <= inputNmbr; i++) {
    jumlah += i;
}
console.log(jumlah);