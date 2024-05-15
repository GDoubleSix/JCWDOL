//////////////////////////////////////////////////////////
// Concat : Menggabungkan data dari dua array atau lebih
//////////////////////////////////////////////////////////

let days = ["Sunday", "Monday", "Tuesday", "Wednesday"];
let animals = ["Dog", "Cat", "Bird", "Zebra"];
let fruits = ['Banana', 'Apple', 'Cherry', 'Watermelon'];

// days + fruits
let daysFruits = days.concat(fruits)
console.table(daysFruits)

// fruits + animals
let fruitsAnimals = fruits.concat(animals)
console.table(fruitsAnimals)

// days + animals + fruits
let allOfThem = days.concat(animals,fruits)
console.table(allOfThem)