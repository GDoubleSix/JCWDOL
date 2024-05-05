// problem :
// create a function that receving array as input, and this function can find max value in array without using built in method in javascript.

// Hints.
// 1. Since the input is array, we already know about the length of array. Lets use for looping
// 2. Set initial index value, Conditional loop, changes after each loop  
//     for (let index = 0; index < arrInput.length; index++)
// 3. Create variable to handle the result
//     let maxValue = 0
// 4. Create conditional logic to compare maxValue from each iteration
//     IF (maxValue < arrInput[index])
//         maxValue = arrInput[index]

// solving :
// 1. Declare the function with parameter
//     FUNCTION find Max value
//         PASS IN: array of integer (arrInput)
// 2. Define variable maxValue to keep the result
//     let maxValue = 0
// 3. Define loop, Starting PointerEvent, condition of looping, and changes after looping
//     FormData(let i = 0; i < arrInput.Length; i++)
// 4. Define conditional to keep the maxValue
//     IF (maxValue < arrInput[i])
//         maxValue = arrInput[i]
//     end if
// 5. Set end of for and return maxValue as the result of the execution functiion
//     END FOR
//     PASS OUT: maxValue
//     END Function