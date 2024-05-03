// Strings / Text
"Hello World"
'Good Morning'
"1234"
"true"
// console.log(typeof("1234"));

//Wait i'll be thare a second
// let greet = "Wait i'll be thare a second";
// console.log(greet);

//I am "Okay"
// \ : Escape Character
// let text = "I am \"Okay\""
// console.log(text);

//New line
//Membuat baris baru layaknya menekan tombol "Enter"
// let text = "Gewaaaaaa\niya saya"
// console.log(text);

//Tab
//Membuat baris berjarak layaknya menekan tombol "tab"
// let text = "Kita\tberjarak"
// console.log(text);

//Concantination String
let firstName = "Muqi"
let lastName = "Gewa Tritanoto"
let fullName = firstName + " " + lastName // Muqi Gewa Tritanoto
// console.log(fullName);

let a = "8"
let b = 12
//String + number => Number akan diubah oleh javascript menjadi string
let c = a + b //"8" + "12" = "812"
let d = a * b // 8 * 12 = 96
let e = a - b // 8 - 12 = -4
// console.log(c);
// console.log(d);
// console.log(e);

//Backtick
// let intro = `My full name is... ${fullName}`
// console.log(intro);



//String Properties and Method

// .length //
//Banyak karakter pada strings
// console.log(x.length);


// .indexof() //
//Mencari index kata dari sebuah Strings
// Index dimulai dari 0
// let resultOne = x.indexOf(W)
// console.log(resultOne);


// // .substring() // //
//Mengcopy sebagian dari string
// index Awal, banyaknya karakter
//copy teks dimulai dari index ke 5 sebanyak 3 karakter
//tidak bisa digunakan di array
// let resultTwo = x.substring(5,3)
// console.log(resultTwo);


// .slice() //
//index awal, index akhir (tidak ikut, hanya sebagian pembatas)
// real :1-3
// let resultThree = x.slice(1,4)
// console.log(resultThree);



// .split //
// Memecah string menjadi beberapa bagian dengan karakter tertentu menjadi array
// Jika pembatasnya adalah 'o' maka 2 huruf o akan dipecah : [ 'Hell', ' W', 'rld!' ]
// let resultFour = x.split('o')

// let resultFour = x.split('') //['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o','r', 'l', 'd', '!']
// console.log(resultFour);


// .toLowerCase() & .toUpperCase() //
//toLowercase : Merubah huruf menjadi kecil
//toUppercase : Merubah huruf menjadi kapital

let y = 'Hello'
let z = 'World!'

// console.log(y.toLowerCase());
// console.log(z.toUpperCase());


// .replace //
// let resultRep = x.replace('l','n') // merubah 1 huruf terdepan
// let resulAlltRep = x.replace(/l/g,'n') // merubah semua huruf l
// console.log(resulAlltRep);


let x = 'Hello World!'
// .includes //
//mengambil nilai true dan false pada string
console.log(x.includes('llo')) //true
console.log(x.includes('asd')) //false
