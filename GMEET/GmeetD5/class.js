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

//Case.
// Di sebuah supermarket, terdapa beberapa product categoty, Mulai dari electronic, fashion dan snack.
// Setiap product category memiliki identitas yang berbeda - beda, seperti product name, product stock, dll
// 1. Jabarkan apa saja identitas yang dimiliki untuk masing masing protuct category
// 2. Class berdasarkan category

    class electronic{
        brand = ''
        price = 0
        stock = 0

        constructor(brand, price, stock) {
            this.brand = brand
            this.price = price
            this.stock = stock
        }
    }
    
    class fashion{
        brand = ''
        price = 0
        stock = 0

        constructor(brand, price, stock){
            this.brand = brand
            this.price = price
            this.stock = stock
        }
        
    }

    class snack{
        brand = ''
        price = 0
        stock = 0

        constructor(brand, price, stock){
            this.brand = brand
            this.price = price
            this.stock = stock
        }
    }

    const arrElectronic = [
        new electronic ("Samsung",5000000,5)
    ]
    const arrFashion = [
        new fashion ("Uniqlo",250000,15)
    ]
    const arrSnack = [
        new snack ("Beng-Beng",1500,25)
    ]

    console.log("Electronic:");
    arrElectronic.forEach(product => {
    console.log(`Brand: ${product.brand}, Price: ${product.price}, Stock: ${product.stock}`);
    });

    console.log("\nFashion:");
    arrFashion.forEach(product => {
    console.table(`Brand: ${product.brand}, Price: ${product.price}, Stock: ${product.stock}`);
    });

    console.log("\nSnack:");
    arrSnack.forEach(product => {
    console.log(`Brand: ${product.brand}, Price: ${product.price}, Stock: ${product.stock}`);
    });