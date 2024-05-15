/////////////////////////////////////////////////
// .unshift() : Menambahkan data dari index awal
// .shift() : Menghapus data dari index awal
/////////////////////////////////////////////////


// Deklarasi value pada arr
let things = ["Pen", "Book", "Shirt"]

// .unshift() : Menambahkan data dari index awal
things.unshift('Jacket')

things.unshift('Clock','Apple')

things.unshift("Pencil", 3, true)

console.table(things)

// .shig() : Menghapus data dari index awal
things.shift()
things.shift()
console.table(things)
console.table(things.length)