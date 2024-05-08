/////////////////
//Do WHILE LOOP
/////////////////

/*
    Alur Proses DO WHILE (task first)
    1. Membuat variabel init
    2. Menjalankan task, menjalankan modification
    3. Evaluasi condition
        a. Condition : true kembali ke step 2
        b. Condition : False, keluar dari block do while
*/

/*do{
    task
}while (condition) {
    
}*/

//////////////////////////////////
// menampilkan 1-5 DO WHILE
//////////////////////////////////



//Membuat variabel init (i)
// number = 1
// //Menjalankan Task
// do {
//     //Menampilkan number
//     console.log(`Do While Number : ${number}`);

//     //Menjumlahkan nilai number dengan 1
//     number ++

// //Evaluasi condition
// } while (number <= 5);
// console.log(`Selesai DO WHILE`);

//////////////////////////////////
// menampilkan 1-5  WHILE
//////////////////////////////////

// let n = 1
// while (n <= 5 ) {

//     console.log(`WHILE Number : ${n}`);

//     n++
// }

let n = 3
do {
    if (n % 2 === 0){
        console.log(`${n} adalah angka genap;`);
    }else{
        console.log(`${n} adalah ganjil`);
    }

    n++

} while (n <= 10);