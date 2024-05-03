// (3) Write a code to check whether the number is prime number or not
// Example: 7 → 7 is a prime number
// Example: 6 → 6 is not a prime number

//menggunakan else if


// 1. Mulai

// 2. Masukkan bilangan yang akan diperiksa (inputNumber)
// 3. Jika inputNumber kurang dari atau sama dengan 1, maka:
//     3.1. Tampilkan "Bukan bilangan prima"
// 4. Jika inputNumber sama dengan 2, maka:
//     4.1. Tampilkan "Bilangan prima"
// 5. Jika inputNumber habis dibagi 2, maka:
//     5.1. Tampilkan "Bukan bilangan prima"

// 6. Untuk setiap bilangan i dari 3 hingga akar kuadrat dari inputNumber, lakukan:
//     6.1. Jika inputNumber habis dibagi i, maka:
//         6.1.1. Tampilkan "Bukan bilangan prima"
//         6.1.2. Selesai
// 7. Tampilkan "Bilangan prima"

// 8. Selesai

//checking prime number : , 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89


let inputNumber = 2

if(inputNumber <= 1){
    console.log("Bukan bilangan prima");
}else if(inputNumber === 2){
    console.log("Bukan bilangan prima");
}else if(inputNumber % 2 == 0){
    console.log("Bukan bilangan prima");
    for(let i = 3; i = Math.sqrt(inputNumber);){ //sqrt => mencari akar 2
        if(inputNumber % i == 0 ){
            console.log("Bukan bilangan prima");
        }
    }
}else{
    console.log("Bilangan prima");
}







