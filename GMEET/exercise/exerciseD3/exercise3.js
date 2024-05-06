// create a function that can create a triangle pattern according to the height we provide like the following:
//     01
//     02 03
//     04 05 06
//     07 08 09 10
// parameter : Heigh -> triangle height

//kemungkinan pakai unshift


const createTriangle = (height) => {
  let pattern = ''; // Inisialisasi pola kosong
  let currentNumber = 1; // Nomor saat ini untuk digunakan dalam pola

  // Loop untuk setiap baris segitiga
  for (let i = 1; i <= height; i++) {
      // Loop untuk menambahkan angka pada setiap baris
      for (let j = 1; j <= i; j++) {
          pattern += currentNumber.toString().padStart(2, '0') + ' '; // Tambahkan nomor saat ini ke pola
          currentNumber++; // Tambahkan nomor saat ini untuk digunakan pada iterasi berikutnya
      }
      pattern += '\n'; // Tambahkan newline setelah setiap baris
  }
  return pattern; 
}

// Contoh penggunaan
console.log(createTriangle(4));

