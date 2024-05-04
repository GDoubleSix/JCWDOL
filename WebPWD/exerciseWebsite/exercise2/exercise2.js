//Mencari berat ideal / IMT
// Rumus IMT = massa(kg) / tinggi(meter)^2
// IMT > 39.9 Obesitas
// a. IMT < 18.85 berat badan kurang
// b. 18.5-24.9 berat badan ideal
// c. 25.0 - 29.9 berat batan berlebih
// d. 30.0 - 39.9 BB sangat berlebih

// let BB = 70
// let TB = 1.65
// let IMT = BB / Math.pow(TB,2)
// console.log(IMT);
// if (IMT < 18.5) {
//     console.log(`Berat badan kurang`);
// }else if (IMT >= 18.5 || IMT <= 24.9) {
//     console.log(`Berat badan ideal`);
// }else if (IMT >= 30.0 || IMT <= 39.9) {
//     console.log(`Berat badan sangat berlebih`);
// }else{
//     console.log('Obesitas');
// }

//======================================================================================
// Perbaikan dari solution
//input berat badan
let weight = parseInt(prompt('Masukkan Massa (kg)'))
//Input tinggi badan
let heightCm = parseInt(prompt('Masukkan Tinggi (CM)'))
// Merubah Cm ke M
let heightM = heightCm / 100

let statusImt
//Dengan rumus yang sudah ada, melakukan evaluasi apakah massa yang dimiliki tergolong kurang, ideal, berlebih, atau sangat berlebih
//massa / (tinggi(m) pangkat 2)
let index = weight / Math.pow(heightM,2)
if (index < 18.5) {
    statusImt = "Kurang"
}else if (index >= 18.5 && index <= 24.9) {
    statusImt = "Ideal"
}else if (index >= 30.0 && index <= 39.9) {
    statusImt = "Ideal"
}else{
    statusImt = "obesitas"
}

let info = `Massa ${weight}kg & Tinggi ${heightM}m \nIMT ${index}, berat badan ${statusImt}`

alert(info)
console.log(info);