// Write a function to split a string and convert it into an array of words
// example : "Hello World -> ["Hello","World"]

const splitString = (string) => {
    return string.split(" ")
}
console.log(splitString("hello 8 as world"));

//===============================================================
//Mdn Web Docs
// const myString = "Hello 1 word. Sentence number 2.";
// const splits = myString.split(/(\d)/);

// console.log(splits);
// [ "Hello ", "1", " word. Sentence number ", "2", "." ]
