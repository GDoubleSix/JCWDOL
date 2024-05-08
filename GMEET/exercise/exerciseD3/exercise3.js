// create a function that can create a triangle pattern according to the height we provide like the following:
//     01
//     02 03
//     04 05 06
//     07 08 09 10
// parameter : Heigh -> triangle height

//kemungkinan pakai unshift


// const createTriangle = (height) => {
//   let pattern = '';
//   let currentNumber = 1; 

//   for (let i = 1; i <= height; i++) {
      
//       for (let j = 1; j <= i; j++) {
//           pattern += currentNumber.toString().padStart(2, '0') + ' '; 
//           currentNumber++; 
//       }
//       pattern += '\n'; 
//   }
//   return pattern; 
// }


// console.log(createTriangle(4));

//=====================================================================================

//Nested loop => Looping di dalam looping
// for(let i=1; i<=3; i++){
//   console.log(`Looping i = ${i}`);
//   for(let j=1; j<=3; j++){
//     console.log(`Looping J = ${j}`);
//     for(let k=1; k<=3; k++){
//       console.log(`Looping k = ${k}`);
//     }
//   }
// }
const genrateTriangle = (n) =>{
  let triangle = ''
  for(i = 1; i<=n; i++){
    // console.log(i);
    for(j = 1; j<=i; j++){
      triangle += '#'
    }
    triangle += '\n'
  }
  return triangle
}

console.log(genrateTriangle(5));


// ######
// ######
// ######

// const triangle = (w,h) =>{
//   let result = ''
//   for(i=1; i<=w; i++){ //baris
//     for(j=1; j<=h; j++){
      
//     }
//   }
// }

//#######
//#####
//###
//##
//#