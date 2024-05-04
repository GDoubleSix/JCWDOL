// Market v.1.2


//stok produk
let stockApel = 5
let stockAnggur = 5
let stockJeruk = 5

//harga produk
let apel = 10000
let anggur = 15000
let jeruk = 20000


//Logic qty & Inputan user
let inputQtyApel = parseInt(prompt('Masukkan berapa banyak apel'))
    if (inputQtyApel > stockApel) {
        inputQtyApel = stockApel
        alert(
            `Permintaan apel melebihi stock, Quantity akan terisi sesai jumlah stock yaitu : ${inputQtyApel}`
        )
    }

let inputQtyAnggur = parseInt(prompt('Masukkan berapa banyak anggur'))
    if (inputQtyAnggur > stockAnggur) {
        inputQtyAnggur = stockAnggur
        alert(
            `Permintaan anggur melebihi stock, Quantity akan terisi sesai jumlah stock yaitu : ${inputQtyAnggur}`
        )
    } 
        
    let inputQtyJeruk = parseInt(prompt('Masukkan berapa banyak jeruk'))
    if (inputQtyJeruk > stockJeruk) {
        inputQtyJeruk = stockAnggur
        alert(
            `Permintaan Jeruk melebihi stock, Quantity akan terisi sesai jumlah stock yaitu : ${inputQtyJeruk}`
        )
    }

let totalApel = apel * inputQtyApel
let totalAnggur = anggur * inputQtyAnggur
let totalJeruk = jeruk * inputQtyJeruk
let totalBayar = totalApel + totalAnggur + totalJeruk

let userBayar = parseInt(
    prompt(
        `
        Apel = ${inputQtyApel} x ${apel} = ${totalApel}
        Anggur = ${inputQtyAnggur} x ${anggur} = ${totalAnggur}
        Jeruk = ${inputQtyApel} x ${apel} = ${totalJeruk}
        Total Bayar =  ${totalBayar}
        Masukkan nominal pembayaran`
    )
)

if (userBayar < totalBayar) {
    nominalKurang = totalBayar - userBayar
    alert(
        `Transaksi batal, uang yang anda masukkan kurang ${nominalKurang}`
    );
}else if (userBayar > totalBayar) {
    nominalLebih = userBayar - totalBayar
    alert(
        `Terimakasih, Uang kembalian anda ${nominalLebih}`
    );
}else{
    alert('Terimakasih');
}