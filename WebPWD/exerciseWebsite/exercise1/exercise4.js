let jumlahHari = 480
let tahun = Math.floor(jumlahHari / 360)
let bulan = Math.floor(jumlahHari % 360 ) / 30
let hari = Math.floor(jumlahHari % 360)
console.log(tahun);
console.log(bulan);
console.log(hari);