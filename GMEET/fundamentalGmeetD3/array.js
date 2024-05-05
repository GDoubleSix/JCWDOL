//array
// Case. Kist Student JCWD = Aboy, Imanuel, Wulan

//CRUD (Creat, Read, update, Delete)
//Create Array
const studensJCWDArray = ['Aboy','Immanuel','Wulan']
//                          0        1          2
//Read Array
console.log(studensJCWDArray[0]); //Aboy
console.log(studensJCWDArray[1]); //Immanuel
console.log(`${studensJCWDArray[2]},${studensJCWDArray[1]}`); //Wulan , Immanuel

//Update Array
studensJCWDArray[1] = 'Rayhan'
console.log(studensJCWDArray[1]); //Rayhan

//Delete Array
delete studensJCWDArray[1] // menghapus immanuel (menjadi string kosong / '')
studensJCWDArray[1] = ''
console.log(studensJCWDArray);



//Method
//.length
// menghitung banyak array mulai dari 1 bukan 0
const programInPwd = ['JCWD','JCDM','JCDS','JCUIUX']
console.log(programInPwd.length);

// .push() : Menambahkan data di index paling akhir
const fruits = ['Jeruk','Anggur']
fruits.push('Durian')
console.log(fruits);

// .pop() : Menghapus data di index paling akhir
const vegetables = ['Sawi','Kol']
vegetables.pop()
console.log(vegetables);

// .unshift() : Menambahkan data di index paling awal
const snacks = ['Chitato','Taro']
snacks.unshift('Potato')
console.log(snacks);

// .slice() : Mengambil kata dari index karakter
const foods = ['Pizza','Mie','Burger']
console.log(foods.slice(0,2))


// .Splice : Menghapus & Menambah data
// .splice (startIndex, totalToDelete, newData)
const drink = ['haus', 'Es Teh Manis Solo', 'Fore', 'Tomorow']
// drink.splice(1,1)
// console.log(drink);

drink.splice(0,1,'janji jiwa') //Ganti index 0 menjadi janji jiwa
console.log(drink);

drink.splice(1,0,'kenangan') //Tambahkan kenangan kedalam index ke 1
console.log(drink);

drink.splice(0,1,'')
console.log(drink);


// .indexof
//Case sensitive
const brands = ['indomie','Supermie','Mue Sedap Enak']
const inputUser = 'Enak'
console.log(brands.indexOf(inputUser.toLowerCase()));

// .includes : Mengembalikan nilai True atau false (boolean)
//Case sensitive
console.log(brands.includes('indomie'));
console.log(brands.includes('supermie'));

// .sort() : Mengurutkan nilai sesuai keinginan kita
const number = [4,8,23,65,100]
number.sort((low, high) => high-low)
console.log(number);

//Mengurutkan nilai dari a - z
const alphabets = ['bebas','apa','api','siapa']
alphabets.sort()
console.log(alphabets);

//ARRAY SPECIAL METHOD FOR LOOPING
// Case : Ingin menampilkan Angka 1-5 menggunakan console.log()
// for(let start = 1; start <= 5; start++){
//     console.log(start);
// }

const arrData = ['Abc', 123, undefined,{},'Bca',null] 
for(let start=0; start<=arrData.length-1; start++){
    console.log(arrData[start]);
}

// .forEach : Mirip seperti looping for biasa
const arr = ['JCWD','JCDM','JCDS']
arr.forEach((value,index) => {
    value
    index
})

//.filter : Menghasilkan Array Baru & Dapat Melakukan Filter
const arrNumber = [50,10,60,70,90,10]
const newArrFilter = arrNumber.filter((item,index) => {
    console.log(index);
    return item >= 70
})
console.log(newArrFilter);

// .map
const newArrMap = arrNumber.map((item,index)=>{
    console.log(index);
    return item >= 70
})
console.log(newArrMap);