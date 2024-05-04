// IF STATEMENT ==============================================

// const age = 10;

// if(age >= 17){
//     console.log("ini di dalam if statment");
// }

//Else Statement
//Backup plan dari if statement
// const age = 20;

// if(age >= 17){
//     console.log("ini di dalam if statment");
// }else{
//     console.log("ini di dalam else statement");
// }

//Else if Statement
//Sebuah gabungan antara Else dan If
// const grade = "B".toLowerCase()
// if (grade === "A"){
//     console.log('Nilai Bagus');
// }else if(grade === "B"){
//     console.log("Nilai lumayan");
// }else if (grade === "C") {
//     console.log("Nilai Buruk");
// }else if(grade === "D"){
//     console.log("Nilai sangat buruk");
// }else{
//     console.log("Nilai yang dimasukkan salah");
// }


//Switch Case
//Struktur control pada javascript
//Untuk decisiion Making
// Wajib Diberikan break *Agar lanjut ke case selanjutnya
//Lebih cocok untuk membandingkan 1 nilai saja

//*Bisa gunakan toLowerCase untuk mengatasi user ketika mengetik menggunakan huruf besar

// const day = "Senin".toLowerCase()

// switch (day) {
//     case "senin":
//         console.log("hari senin");
//         break;
//     case "selasa":
//         console.log("hari selasa");
//         break;
//     case "rabu":
//         console.log("hari rabu");
//         break;
    
//     default:
//         console.log("Hari tidak ditemukan");
//         break;
// }


//LOGICAL OPERATOR => &&, || (or), ! (tidak)
// ||(OR) => jika salah 1 benar akan me return true
// &&(AND) => Harus keduanya benar


// ||(OR) => jika salah 1 benar akan mengembalikan nilai => true
// const car = "MERCY";

// if(car == "BMW" || car == "MERCY"){
//     console.log("Mobil German");
// }else{
//     console.log("Mobil Jepang");
// }


// &&(AND) => Kondisinya wajib benar semua, maka akan menghasilkan =>TRUE
// const umur = 18
// const punyaSim = true
// if(umur >= 18 && punyaSim == true){
    // console.log("Boleh membawa kendaraan");
// }else{
    // console.log("Tidak boleh membawa kendaraan");
// }

// !(NOT) => Membalikkan sebuah nilai boolean
// !! => Double true untuk membalikkan nilai
// const isTrue = true;
// console.log(!isTrue);

// const user = "Joko"
// if(!user){
//     console.log("User");
// }else{
//     console.log("User tidak ada");
// }

//===========================================================
//TERNARY OPERATOR => Shortcut dari if else statement/ Untuk mentranslate if Else condition
// lebih baik saat hanya memiliki 2 kondisi agar lebih mudah dibaca
// Rumus => kondisi ? "true" : "false"
// const str = "Javascript"
// console.log(str === "Javascript"? "Javascript" : "Not Javascript");


//===========================================================
//LOOP STATEMENT
// Type loop : for loop, while loop, do while loop

//FOR LOOP => mempunyai 3 statment
// Statement 1 : Menginisialisasi variabel dari looping itu sendiri
// Statment 2 : mendefine kondisi dari looping tersebut
// Statment 3 : kode yang di eksekusi di akhir setiap literasi
// Biasanya digunakan saat sudah tau ingin melakukan berapa kali looping
// 3 kali perulangan
// for(let i=0; i < 3; i++){
//     console.log("hello world");
// }


//While loop
// Dijalankan saat kondisinya true
// digunakan saat belum tau ingin melakukan berapa kali looping
// let i = 1;
// while (i < 5) {
//     console.log("Hallo");
//     i++
// }


//Do While loop ==============================
// Melakukan task terlebih dahulu , lalu akan melakukan loopingnya
// Biasa masuk ke ujian

// let count = 1
// do{
//     console.log("ini iterasi ke" + count);
//     count++
// } while (count <= 7)

// Break =========================================================
let sum = 0;
while (true) {
    console.log("sum : " + sum);
    if(sum >= 5){
        break
    };
    sum += 1
}
// while(true){
//     console.log(`sum : ${sum}`);
    
//     if(sum >= 5) break;
//     sum ++;
// }

//CONTINUE
// Melakukan skip pada looping
// for(let i=1; i<=5; i++){
//     console.log(`iterasi ${i}`);
// }