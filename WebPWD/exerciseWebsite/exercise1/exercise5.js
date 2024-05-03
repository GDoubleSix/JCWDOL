// andi + budi = 49
// rasio andi dan budi = 0.4 = 4 / 10 = 4:10 =2:5
// rasio andi = 2, rasiso budi = 5
// total rasio = 2+5 = 7
// andi = total umur * (rasio andi / total rasio)
// bufi = total umur * (rasio budi / total rasio)

let usia = 49
let rasioA = 2
let rasioB = 5
let totalRasio = rasioA + rasioB
let andi = usia * (rasioA / totalRasio)
let budi = usia * (rasioB / totalRasio)

console.log(
    `Usia andi saat ini adalah : ${andi} \n usia budi saati ini adalah : ${budi}`
);
andi += 2
budi += 2


console.log(`Usia andi adalah : ${andi} dan usia budi adalah : ${budi}`);