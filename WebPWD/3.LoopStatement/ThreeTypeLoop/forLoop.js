///////////
//FOR LOOP
//////////

/* 
    1. Membuat variabel init (i)
    2. Mengevaluasi Condition
        a. True : Menjalankan langkah - 3
        b. False : Keluar dari loop
    3. menjalankan Task
    4. Menjalankan modification, Kembali ke langka - 2
*/

// init, condition, modification

//////////////////////
//Menampilkan 1 - 5
//////////////////////

// for(i=1; i<=5; i++){
//     console.log(i);
// }


//////////////////////
//Menampilkan angka genap
//////////////////////

for (let i = 5; i>=0; i--){
    if (i % 2 == 0) {
        console.log(`${i} = Genap`);
    } else {
        console.log(`$${i} = Ganjil`);
    }
}