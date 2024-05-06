// create a function that can create a triangle pattern according to the height we provide like the following:
//     01
//     02 03
//     04 05 06
//     07 08 09 10
// parameter : Heigh -> triangle height

//kemungkinan pakai unshift


for(let i = 0; i < arr.length; i++){
    let max = 0;
    for (let j = 0; j < arr.length; j++){
      if (arr[j][i] > max){
        max = arr[j][i]
      }
      newArr.push(max)
    }
    return newArr
  }
  console.log(newArr(10));