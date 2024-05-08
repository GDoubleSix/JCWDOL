// CLASS
// Cetakkan untuk membuat object dengan property yang sama

// case. Name, Price, Discount
// const products = [
//     {name:'A', price:5000, discount: 0},
//     {name:'B', price:10000, discount: 10},
//     {name:'C', price:15000, discount: 15}
// ]

// products.forEach(item =>{
//     console.log(`${item.name}` = ${item.price});
// })

// class products{
//     name = ''
//     price = 0
//     discount = 0

//     constructor(name, price, discount){
//         this.name = name;
//         this.price = price;
//         this.discount = discount
//     }
// }

// const product1 = new products('Apel', 10000, 10)
// console.log(product1);

// const arrProducts = [
//     new products('Apel', 10000, 10),
//     new products('Jeruk', 15000, 15),
//     new products('Anggur', 20000, 20)
// ]

// console.log(arrProducts);

// Case. Sebuah class untuk data student yang ada di pwd

class students{
    name = ''
    address = ''
    age = 0

    constructor(name, address, age){
        this.name = name
        this.address = address
        this.age = age
    }
}

const arrStudentPwd = [
    new students('Salaudin','Jakarta', 20),
    new students('Awaludin','Medan', 20)
]


//TUGAS
//Ulik setter dan getter di dalam class