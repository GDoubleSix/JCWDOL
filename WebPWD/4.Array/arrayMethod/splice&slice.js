///////////////////////////////////////////////
// .Splice() : Menghapus dan menambagkan data
///////////////////////////////////////////////

/*
    syntax

    Array.splice(index, amount, add data)
    index : Index awal dimulainya operasi (menghapus)
    amount : Jumlah data yang ingin dihapus mulai dari 'index'
    add data : Menambahkan data baru kedalam arr
*/

// let things = ['Pen','Book','Pencil']

// Menghapus index 1 (book), dan ganti dengan apple
// things.splice(1,1,'apple')

// console.table(things)

// Menghapus index 2 (pencil)
// things = ['Pen','Book','Pencil']

// things.splice(2,2)

// console.table(things)

// things = ['Pen','Book','Pencil']

//menambahkan  data 'banana' dan 'apple' di index ke 2 tanpa menghapus data
// things.splice(2,0,'banana','apple')

// console.table(things)


/////////////////////////////////////////////////////////////////
// Delete : Menghapus data, dan indexnya akan besisi undefined
/////////////////////////////////////////////////////////////////


// let things = ['Pen','Book','Pencil'] 
// things.delete(0)


//////////////////////////////////////////////////////////////
// .slice() : untuk mengcopy data dengan awal dan akhir index
//////////////////////////////////////////////////////////////

/*
    Syntax
    array.slice("Start index","End index")
    start index : Index awal dari data yang ingin di copy
    end idex : Pembatas dari data yang ingin di copy
*/

// Deklarasi arr dengan nilai
// let fruits = ['Banana', 'Apple', 'Cherry', 'Watermelon']
// Menampilkan apple dan chery
// let appCherry=fruits.slice(1,3)

// console.table(appCherry)

// Menampilkan banana - chery
// let banAppCherry = fruits.slice(0,3)
// console.table(banAppCherry)

// Menampilkan cherry saja
// let cherry = fruits.slice(2,3)
// console.table(cherry)

// Menampilkan apple - index akhir
// let toLastIndex = fruits.slice(1)
// console.table(toLastIndex);


