//FUNCTION : Sebuah wadah untuk menyimpan block code => Reuseable
//Tahapan Membuat Function
    // 1. Create function
    // 2. Call Function

//Type function
// 1. Declarative Function
//Kelebihan
    // - Hoisting : dapat memanggil function dulu lalu membuat function
    // Lebih ke Object Oriented Programing
function output(){
    console.log('Hello World');
}
output()

// 2. Expression Function : Disimpan kedalam variable
const printOutput = function (){
    console.log('Hi JCWd!');
}
printOutput()

// 3. Array Function
// Lebih ke Function Oriented programing
const shouwOutput = () => {
    console.log('Hello Student');
}

//========================================================================

// FUNCTION with PARAMETER(s)
// Function dinamis => Dapat menerima parameter dari luar sesuai keinginan
// Case. Menampilkan angka 1 - bebas diubah
const ShowNumber = (number) => {
    for (let i = 1; i<=number; i++)
        return (i);
}
console.log(ShowNumber(10));
//Menampilkan angka 1-12
ShowNumber(12)//Argument => Value yang dikirimkan menuju ke parameter

function Penjumlahan(num1, num2){ // num1 = 10; num2 = 5
    console.log(num1 + num2) // 10 + 5 = 15
}

Penjumlahan(10, 5)


//FUNCTION with RETURN
// Untuk memanipulasi proses
function perkalian(num1,num2){
    return num1 * num2
}
const resultPeralian = perkalian (10,5);
console.log(resultPeralian);


// Exercise. Buatlah Mini Aplikasi Calculator dengan menggunakan Function
//      Fitur : Penjumlahan, Pengurangan, Pembagian, Dan perkalian
