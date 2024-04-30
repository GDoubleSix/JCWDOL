//Ctrl+J untuk membuka terminal

console.log("Hello World");


// Rules making variable
// 1. can't contain space
let firstname = "muqi"
console.log(firstname) 

let myaddress = "tembung"
console.log(myaddress)

// 2. can only start with huruf, underscore, dolar sign

//benar
let phonenumber
let _age
let $qty

// let firstname, midlename, lastname

//salah
// let 1heart
// let 7days
// let !warning

// 3. Hanya dapat terdiri dari huruf, angka, underscore, dan dolar sign

let totalbill, my_birthday, $cloud9

// 4. Bersifat case - sensitif (Beda huruf = beda variabel)

let nextday = "Senin"
let nextDay = "Senin"


// CASE STYLE

//camelCase
//Selelu diawali huruf kecil dan kata selanjutnya diawali huruf besar

let myNumber
let ourLastNight

//snake_Case
//Selalu menggunakan huruf kecil namun kata selanjutnya menggunakan underscore

let my_number
let our_last_night



//Data types
//String / text
//Wajib menggunakan tanda kutip 1 ataupun tanda kutip 2

var say = "hello"
var today = "monday"
var oneFour = "123"

//Numbers / Angka

//integer
var intOneToTen = 12345678910
var intTwo = 2222
var intThree = 3333

//float 
var ganjarMahfud = 0.16
var anisImin = 0.24
var prabowoGibran = 0.58


//Bolean
//Hanye memiliki 2 nilai = True dan false
let praGib = true
let ganjarAnis = false


//Object
//Menyimpan data lebih dari 1, object dapat memiliki "variabel"

// let fullName = {firstName : "Muqi", lastName :"Gewa"}
// console.log (fullName)
// console.log (fullName.firstName)//untuk mengambil firstName saja
// console.log (fullName.lastName)//untuk mengambil lastName saja


//Array
//Menyimpan data lebih dari 1, Setiap data akan diwakilkan nomor index pada array

let days = ["Monday", "Tuesday", "Sunday"]

// console.log(days[0])// nilai pada [] untuk memanggil index ke berapa
// console.log(days[1])// nilai pada [] untuk memanggil index ke berapa
// console.log(days[2])// nilai pada [] untuk memanggil index ke berapa


//Undefined dan Null
//Mewakili variabel yang tidak menyimpan nilai apapun

// let undfn
// console.log(undfn)

// let nll = null
// console.log(nll)


//Type of
//Untuk mengetahui tipe data yang kita gunakan

let language = "JS"
let result =  typeof(language)

console.log(result)