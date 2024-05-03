

//math random 1 - 100
//Math.random()*10 = 0.0 - 0.99, karena diberi floor maka jaraknya berubah menjadi 0-9 dan setelah ditambah 1 jaraknya berubah menjadi 1-10
let angkaAcak = Math.floor(Math.random()*100)+1
document.write(angkaAcak);
