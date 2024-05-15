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