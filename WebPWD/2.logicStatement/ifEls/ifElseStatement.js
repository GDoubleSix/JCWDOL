// If Else Statement

// jika condition bernilai true, maka task 1 akan dijalankan
// jika condition bernilai false, maka task 2 akan dijalankan


let a = 100
let b = 84
let c = 74
let d = 59
let nilaiSiswa = 69
let grade 
if (nilaiSiswa >= 85 && nilaiSiswa <= 100) {
    grade = 'A'
}else if(nilaiSiswa >= 75 && nilaiSiswa <= 84){
    grade = 'B'
}else if (nilaiSiswa >= 60 && nilaiSiswa <= 74) {
    grade = 'C'
}else if (nilaiSiswa >= 0 && nilaiSiswa <= 59) {
    grade = 'D'
}else{
    grade = 'F'
}

console.log(`Nilai : ${nilaiSiswa} Grade : ${grade}`);