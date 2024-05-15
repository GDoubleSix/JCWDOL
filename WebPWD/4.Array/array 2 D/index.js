// let thing = [
//     ["Red Pen", "Blue Pen"],
//     ["Analog Clock", "Digital Clock"],
//     ["Futsal Shoes", "Badminton Shoes"],
// ]

// red pen, blue pen
// console.log(thing[0]);

// analog clock
// console.log(thing[1][1]);

// Badminton Shoes
// console.log(thing[2][1]);


// let thing = [
//     ["Red Pen", "Blue Pen"],
//     ["Analog Clock", "Digital Clock"],
//     ["Futsal Shoes", "Badminton Shoes"],
// ]

//Menambahkan data di index terakhir
// thing.push(["Aple","Banana"])
// console.table(thing)

//Menambahkan data di index awal
// thing.unshift(["Honda","Toyota"])
// console.table(thing)

//Remove data index akhir
// thing.pop()
// console.table(thing)

//Remove data index awal
// thing.shift()
// console.table(thing)


let thing = [
    ["Red Pen", "Blue Pen"],
    ["Analog Clock", "Digital Clock"],
    ["Futsal Shoes", "Badminton Shoes"],
]

// Mengganti index 1
thing[1] = ["Blue Car", "Red Car"]
console.table(thing)

// Mengganti index 1 yang indexnya 0 
thing[1][0] = "Black Car"
console.table(thing)

console.log(
    `Aku memiliki ${thing[1][0]} dan aku memiliki ${thing[2][1]}`
)