// (6) Write a code to print the first N fibonacci numbers
// Example: 15 →610

//rumus : F(n)=F(n−1)+F(n−2)
//cara1
let fiboNumber = 15 //f(n)
let fibo1 = 0
let fibo2 = 1
for(let i = 2; i<=fiboNumber; i++){
    let hasilFibo = fibo1 + fibo2
    fibo1 = fibo2
    fibo2 = hasilFibo
    console.log(hasilFibo); 
}

//cara2
let inputNumber = 15
let fib1 = 0
let fib2 = 1
let iterasi = 2
while (iterasi <= inputNumber) {
    let nilaiSekarang = fib1 + fib2
    console.log(`${nilaiSekarang}`);
    fib1 = fib2
    fib2 = nilaiSekarang
    iterasi ++
}