//Mencari berat ideal / IMT
// Rumus IMT = massa(kg) / tinggi(meter)^2
// a. IMT < 18.85 berat badan kurang
// b. 18.5-24.9 berat badan ideal
// c. 25.0 - 29.9 berat batan berlebih
// d. 30.0 - 39.9 BB sangat berlebih
// IMT > 39.9 Obesitas

let BB = 67
let TB = 1.22
let IMT = BB / Math.pow(TB,2)
console.log(IMT);
if (IMT < 18.5) {
    console.log(`Berat badan kurang`);
}else if (IMT <= 18.5 || IMT <= 24.9) {
    console.log(`Berat badan ideal`);
}else if (IMT <= 30.0 || IMT <= 39.9) {
    console.log(`Berat badan sangat berlebih`);
}else{
    console.log('Obesitas');
}