//Jarak mobil A & B = 120 km. A berjalan 60km/h dari timur. B berjalan 40 km.h dari barat. A&B start pukul 9 WIB. jam brp A & B bertabrakan?

// let time = 9
// let jarak = 120
// // let time = jarak /
// let timeA = jarak / 60
// let timeB = jarak / 40
// console.log(timeA);
// console.log(timeB);
// let tabrakan = time += timeB

// console.log(`Jadi kedua mobil bertabrakan pada pukul ${tabrakan} WIB`);

//=============================================================
let kecepatan = 120
let kecepatanA = 60
let kecepatanB = 40
let startTimehour = 9
let startTimeMinute = 0

//Total kecepatan
// 60 + 40 = 100
let totalKecepatan = kecepatanA+=kecepatanB
//Waktu yang dibutuhkan untuk bertemu (jam)
//120 / 100 = 1.2 jam
let timeHour = kecepatan / totalKecepatan
//Waktu yang dibutuhkan untuk bertemu (menit)
// 1.2 jam * 60 = 72 menit : 60 menit + 12 menit
let timeMinute = timeHour * 60

//waktu bertemu (jam)
//waktu bertemu (jam) : 9 + (72 / 60) : 10
let distanceHour = startTimehour + Math.floor(timeMinute / 60)
let distanceMinute = startTimeMinute + (timeMinute % 60)
console.log(distanceHour);
console.log(distanceMinute);
