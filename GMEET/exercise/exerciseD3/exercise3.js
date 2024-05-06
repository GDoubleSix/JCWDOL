// create a function that can create a triangle pattern according to the height we provide like the following:
//     01
//     02 03
//     04 05 06
//     07 08 09 10
// parameter : Heigh -> triangle height

//kemungkinan pakai unshift


const createTriangle = (height) => {
  let pattern = '';
  let currentNumber = 1; 

  for (let i = 1; i <= height; i++) {
      
      for (let j = 1; j <= i; j++) {
          pattern += currentNumber.toString().padStart(2, '0') + ' '; 
          currentNumber++; 
      }
      pattern += '\n'; 
  }
  return pattern; 
}


console.log(createTriangle(4));

