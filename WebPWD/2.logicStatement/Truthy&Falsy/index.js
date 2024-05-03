// Falsy dan Truthy value
// Falsy Values: sebuah nilai yang jika di ubah menjadi boolean akan menjadi false

//Zero (0)
let resultZero = Boolean(0)
console.log(`hasil booleannya adalah : ${resultZero}`);

//Empty String ("")
let resultString = Boolean("")
console.log(`hasil booleannya adalah : ${resultString}`);

//Null
let resultNull = Boolean(null)
console.log(`hasil booleannya adalah : ${resultNull}`);

//Undefined
let resultUndefined = Boolean()
console.log(`hasil booleannya adalah : ${resultUndefined}`);

//NaN
let resultNan = Boolean(NaN)
console.log(`hasil booleannya adalah : ${resultNan}`);


//Truthy value : sebuah nilai yang jika di ubah menjadi boolean akan menjadi true
//Selain dari falsy value : 23 -12 , " " "a",[],{}