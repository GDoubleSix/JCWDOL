//Merubah Tipe Data

// // String // //
let a = "123"
let b = "123.45"

let intResult = parseInt(a)
// console.log(typeof(intResult)); //number > karena sudah dirubah dengan parseInt
// console.log(typeof(a)); //String > Karena di apit "" dan belum dirubah dengan parseInt

// // Float // //
let floatResult = parseFloat (a) //123
// console.log(floatResult);

floatResult = parseFloat (b)//123.45
// console.log(floatResult);


//Numbers
let c = 3
let d = 3.14

//From Integer to String
let strResult = c.toString() //"3"
// console.log(strResult);

//From float to String
strResult = d.toString() //"3.14"
console.log(strResult);
