///////////////////////
// Drawing Horizontal Line
///////////////////////

//////////////////////////////////////////////
// Menjumlahkan 0 + 1 + 2 + 3 + 4 + 5
//////////////////////////////////////////////

// Variabel yang akan menyimpan hasil penjumlahan
// let number = 0
//Loop sebanyak 5 kali, dengan menyediakan 1 - 5
// for(let i = 1; i<=5; i++){
    //Menjumlahkan nilai terakhir 'Number' dengan nilai 'i'
    // number += i
// }
//Menampilkan hasil penjumlahan
// console.log(number);


/////////////////////////////
//Membuat Garis Horizontal
/////////////////////////////

// let stars = ''
// for(let i=0; i<=5; i++){
//     for(let j = 1; j<=i; j++){
//             // j += i
//             // stars += '*'
//             stars +=j
//         }
//         stars += '*'
//         }
        
// console.log(stars);
        
/////////////////////////////
//Membuat Garis Vertical
/////////////////////////////

// let vertical = ''
// for(let i=0; i<=5; i++){
//     vertical += '* \n'
// }
// console.log(vertical);

/////////////////////////////
//Membuat Bentuk Kotak
/////////////////////////////

// let stars = ''
// let rows = 3

// Loop i untuk membuat baris
// Banyaknya loop i ditentukan dari variabel rows
// for (let i = 1; i<=rows; i++){
    
    //Loop j untuk menambahkan bintang per baris
    // Banyaknya bintang setiap baris = jumlah baris
    // for(let j = 1; j<=rows; j++){
        //Menambahkan 1 bintang dari nilai sebelmunya
        // stars += ' * '
    // }
    //Menambahkan new line setiap selesai loop j / 1 baris bintang
    // stars += '\n'
// }
// console.log(stars);


//////////////////////////////////////
//Membuat Bentuk Segitiga (Siku-Siku)
//////////////////////////////////////

// Persegi : Jumlah bintang perbaris ditentukan dari total baris
// Segitiga siku2 : Jumlah bintang perbaris ditentukan dari "posisi baris" nya / iterasi

// baris ke 1 : *
// baris ke 2 : * *
// baris ke 3 : * * *
// baris ke 4 : * * * *
// baris ke 5 : * * * * *

let segitiga = ''
let height = 6

// loop i digunakan untuk menentukan seberapa banyak baris
for(let i=1; i<=height; i++){
    
    //Loop j digunakan untuk menentukan banyak bintang perbaris
    for(let j=1; j<=i; j++){
        // j -= i
        segitiga += '* '
    }
    segitiga += '\n'
}
console.log(segitiga);