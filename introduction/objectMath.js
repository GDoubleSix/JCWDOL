//properties = merupakan sebuah variabel di dalam object
// Object Math memiliki property bernama PI
// Math.PI

//Bisa disebut function karena di depannya tidak ada object, maka disebut function
//Function : Kode yang memiliki sebuah tanda kurung
//melihat tipe data
// typeof()

//Method : Function yang dimiliki oleh object
//Object Math memiliki method bernama abs
// Math.abs()

//Object console memiliki method bernama log
// console.log(Math.PI);


//Math methods

//Absolute / abs : Mengubah bilangan negatif menjadi positif
//Hasil dari Math.abs() Akan disimpan kedalam variabel
let result = Math.abs(-4.8) // 4.8
// console.log(result);

//Power / pow : Memangkatkan bilangan
//Delapan pangkat 2
let powResult = Math.pow(8,2)
// console.log(powResult);

//Square root :  Untuk mencari akar 2 pada suatu bilangan
// akar dua dari 64
let squareRoot = Math.sqrt(64)
// console.log(squareRoot);

//Cube root :  Untuk mencari akar 3 pada suatu bilangan
// akar 3 dari 8
let cubeRoot = Math.cbrt(8)
// console.log(cubeRoot);

//Round() : Untuk pembulatan sesuai aturan matematika
//Desimal >=5, dibulatkan ke atas
//Desimal <=4, dibulatkan ke bawah
let rndResult = Math.round(4.3) //4
// console.log(rndResult);
rndResult = Math.round(4.6) //5
// console.log(rndResult);


//floor() : Method ini digunakan untuk pembulatan kebawah
let floResult = Math.floor(3.9) //3
// console.log(floResult);

//ceil() : Method ini kebalikan dari floor
let ceResult = Math.ceil(3.3) //4
// console.log(ceResult);

//min() : mencari nilai minimal
let minResult = Math.min(12,3,89) //3
// console.log(minResult);

//max() : mencari nilai maximal
// console.log(Math.max(12,4,89));//89


//random()
//Math.random()*10 = 0.0 - 0.99, karena diberi floor maka jaraknya berubah menjadi 0-9 dan setelah ditambah 1 jaraknya berubah menjadi 1-10
let satuSepuluh = Math.floor(Math.random()*10)+1
console.log(satuSepuluh );

let ran = Math.random() // 0.00 - 0.99
let ranMultiTen = ran * 10 // 0.0 - 9.9
let satuSembilan = Math.floor(ranMultiTen) // 0-9
let oneTen = Math.floor(ranMultiTen) + 1 // 1-10
console.log(oneTen);

