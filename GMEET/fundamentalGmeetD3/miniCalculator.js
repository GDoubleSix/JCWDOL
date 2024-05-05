// Exercise. Buatlah Mini Aplikasi Calculator dengan menggunakan Function
//      Fitur : Penjumlahan, Pengurangan, Pembagian, Dan perkalian


function calculator (num1,num2,operation){
    if (operation === '+' ) return num1 + num2
    if (operation === '-' ) return num1 - num2
    if (operation === '*' ) return num1 * num2
    if (operation === '/' ) return num1 / num2
}
console.log (calculator(10,5,'+'));

