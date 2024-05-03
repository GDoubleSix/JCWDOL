//Market v1.1
// - Terdapat tiga buah yang dijual : Apel, Anggur, Jeruk
//  - Setiap buah memiliki harga satuan sebagai berikut : 
//     - Apel      : 10.000
//     - Anggur    : 15.000
//     - Jeruk     : 20.000
//  - Saat app pertama kali berjalan. Akan langsung memunculkan promp sebanyak 3 kali untuk meminta input quantity dari setiap produk
//  - Hitung harga total untuk setiap buah dengan mengkalikan qty dengan harga satuan. Lalu munculkan informasi tersebut beserta total biaya dengan mengakumulasi semua harga total dari setiap buah- Munculkan informasi tersebut menggunakan alert

let apel = 10000
let anggur = 15000
let jeruk = 20000

let inputQtyApel = prompt('Masukkan berapa banyak apel')
let inputQtyAnggur = prompt('Masukkan berapa banyak apel')
let inputQtyJeruk = prompt('Masukkan berapa banyak apel')

let totalApel = apel * inputQtyApel
let totalAnggur = anggur * inputQtyAnggur
let totalJeruk = jeruk * inputQtyJeruk

let totalBayar = totalApel + totalAnggur + totalJeruk

alert(
    `
    Apel = ${totalApel}
    Anggur = ${totalAnggur}
    Jeruk = ${totalJeruk}
    Total Bayar = ${totalBayar}
    `
)
