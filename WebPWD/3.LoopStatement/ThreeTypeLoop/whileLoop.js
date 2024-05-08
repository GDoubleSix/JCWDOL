//Loop Statement
// Statement yang memungkinkan kita untuk mengulang suatu proses / Task

//WHILE LOOP

/*
    Aturan utama loop
        - Selama condition true maka task pada loop akan di jalankan sampai bernilai false
*/

/*
    Alur proses loop 
        - Alur A : While loop dan for loop
        - Alur B : Do while
*/


/* 
    Alur proses While loop
        1. Membuat variabel dengan nilai awal, digunakan sebagai acuan loop
        2. Mengevaluasi condition 
            a. Ketika condition bernilai true, maka akan memproses task yang ada
            b. Jika condition bernilai false, maka akan menghentikan proses
        3. Setelah menyelesaikan task yang ada di dalam block loop => memodifikasi nilai pada variabel init
        4. Kembali ke langkah 2
*/


// let number = 1; //init
// while (number <= 5) { //condition

//     //task
//     console.log(`Number : ${number}`);

//     number ++
// }
// console.log("Keluar Loop");

//====================================================================================

//2 langkah
// let number = 2; //membuat variabel init

// while (number <= 10) { //Mengevaluasi condition
//     //task
    
//     console.log(`Number : ${number}`); // menampilkan task
//     //kembali mengevaluasi
//     number +=2//Menjumlahkan 'number dengan dua 
// }
// console.log('Selesai loop');

//=====================================================================================
//Menampilkan angka genap saja

//Nilai genap adalah nilai yang habis jika dibagi = 2
// jika di modulus dua, hasilnya adalah nol


// let number = 0 //init
// while (number <= 5) { //condition
    
//     //Mengevaluasi nilai, apakah bilangan genap 
//     //Jika number % 2 === 0, Maka nilai tsb termasuk bilangan genap
//     if (number % 2 === 0){
//         //Menampilkan bilangan genap pada terminal
//         console.log(`Angka genap ${number}`);
//     }
//     //Modification
//     //menjumlahkan 'number' Dengan 1
//     number++
// }

// // Keluar dari loop
// console.log('Selesai loop');


//=====================================================================================
//Menampilkan angka ganjil saja

//Nilai ganjil adalah nilai yang sisa 1 jika dibagi  2
// jika di modulus dua, hasilnya adalah 1

// let number = 0 //init
// while (number <= 10) { //condition
    
//     //Mengevaluasi nilai, apakah bilangan ganjil 
//     //Jika number % 2 === 0, Maka nilai tsb termasuk bilangan ganjil
//     if (number % 2 === 1){
//         //Menampilkan bilangan ganjil pada terminal
//         console.log(`Angka ganjil ${number}`);
//     }
//     //Modification
//     //menjumlahkan 'number' Dengan 1
//     number++
// }

// // Keluar dari loop
// console.log('Selesai loop');


//=====================================================================================

//Menampilkan ganjil dan genap

// let number = 0 //Membuat variabel init

// while (number <= 10) { //Mengevaluasi Condition

//     //Mengecek apakah number bernilai 0 jika % 2
//     if (number % 2 === 0) { 
//         //tampilkan task
//         console.log(`Angka Genap ${number}`);

//     }else{ //Jika bernilai 1 ketika di % 2

//         console.log(`Angka ganjil ${number}`);

//     }
//     //menambahkan satu nilai terhadap nilai yang disimpan di variabel
//     number ++
// }