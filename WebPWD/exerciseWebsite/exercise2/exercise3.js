// Market v.1.2
// -Tambahkan variable stock untuk setiap produk
// - Jika user menginput qty melebihi stock produk. Jumlah stock yang ada akan menjadi nilai qty dari produk tersebut
// - Saat menampilkan total yang harus dibayar, User akan diminta untuk input nominal uang membayar
//- Dari input user nantinya akan memiliki tiga kondisi yang berbeda, yang akan mempengaruhi pesan pada alert yang akan muncul, pesan pada alert akan muncul berbeda tergantung kondisi yang ada
//  1. Jika user menginput dengan jumlah kurang dari seharusnya, munculka "Transaksi batal, Uang yang anda masukkan kurang..."
//  2. Jika user menginput dengan jumlah lebih dari seharusnya, munculkan "Terimakasih, Uang kembalian anda ...."
//  3. Jika user menginput dengan jumlah yang sama, maka munculkan allert terimakasih

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
