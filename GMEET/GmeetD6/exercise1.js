//Case.
// Di sebuah supermarket, terdapa beberapa product categoty, Mulai dari electronic, fashion dan snack.
// Setiap product category memiliki identitas yang berbeda - beda, seperti product name, product stock, dll
// 1. Jabarkan apa saja identitas yang dimiliki untuk masing masing protuct category
// 2. Class berdasarkan category

// class electronic{
    //     brand = ''
    //     price = 0
    //     stock = 0
    
    //     constructor(brand, price, stock) {
        //         this.brand = brand
//         this.price = price
//         this.stock = stock
//     }
// }

// class fashion{
    //     brand = ''
//     price = 0
//     stock = 0

//     constructor(brand, price, stock){
    //         this.brand = brand
    //         this.price = price
    //         this.stock = stock
    //     }
    
    // }
    
// class snack{
    //     brand = ''
    //     price = 0
//     stock = 0

//     constructor(brand, price, stock){
    //         this.brand = brand
//         this.price = price
//         this.stock = stock
//     }
// }

// const arrElectronic = [
//     new electronic ("Samsung",5000000,5)
// ]
// const arrFashion = [
//     new fashion ("Uniqlo",250000,15)
// ]
// const arrSnack = [
//     new snack ("Beng-Beng",1500,25)
// ]

// console.log("Electronic:");
// arrElectronic.forEach(product => {
// console.log(`Brand: ${product.brand}, Price: ${product.price}, Stock: ${product.stock}`);
// });

// console.log("\nFashion:");
// arrFashion.forEach(product => {
// console.table(`Brand: ${product.brand}, Price: ${product.price}, Stock: ${product.stock}`);
// });

// console.log("\nSnack:");
// arrSnack.forEach(product => {
    // console.log(`Brand: ${product.brand}, Price: ${product.price}, Stock: ${product.stock}`);
    // });
    
    


//Case.
// Di sebuah supermarket, terdapa beberapa product categoty, Mulai dari electronic, fashion dan snack.
// Setiap product category memiliki identitas yang berbeda - beda, seperti product name, product stock, dll
// 1. Jabarkan apa saja identitas yang dimiliki untuk masing masing protuct category
// 2. Class berdasarkan category

// Electronic : Product Name, Product Discount, Product Stock, Product SerialNumber, Produck Guarantee, Product Color
// Fashion : Product Name, Product Discount, Product Stock, Product Size, Product Color, Product Material
// Snack : Product Name, Product Discount, Product Stock, Product Discount, Product Flavor, Product expiry, product Netto

// INHERITANCE : Pewaris Property (Ayah ke anak)
// Karena dari ketiga class memiliki nilai yang sama (name, discount, stock. Maka kita akan membuat class inheritance )

class product {
    constructor(name, discount, stock){
        this.name = name
        this.discount = discount
        this.stock = stock
    }
}

class ProductElectronic extends product{
    constructor(name, discount, stock, serialNumber, guarantee, color){
        super(name, discount, stock)
        this.serialNumber = serialNumber
        this.guarantee = guarantee
        this.color = color
    }
}

class ProduckFashion extends product {
    constructor(name, discount, stock, size, color, material){
        super(name, discount, stock)
        this.size = size
        this.color = color
        this.material = material
    }
}

class ProduckSnack extends product {
    constructor(name, discount, stock, flavor, expiry, netto){
        super(name, discount, stock)
        this.flavor = flavor
        this.expiry = expiry
        this.netto = netto
    }
}

const inputElectronic = new ProductElectronic ('TV', 10, 15, 'A08BJ', '23-MEI-2027', 'Black')
const inputFashion = new ProduckFashion ('UNIQLO', 5, 35, 'UNI008', 'XL', 'Blue', 'Cutton')
const inputSnack = new ProduckSnack ('Beng-Beng', 0, 45, 'BB-009', '12-JUNE-2026', '50g')

console.log(inputElectronic);
console.log(inputFashion);
console.log(inputSnack);