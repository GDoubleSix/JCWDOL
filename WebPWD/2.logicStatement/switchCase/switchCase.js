// 1. Dapat memiliki condition lebih dari satu
// 2. Terdapat block kode yang aan dijalankan saat semua condition bernilai false(default)

// Menyamakan nilai yang disimpan pada variabel "Key" dengan "Value" yang ada pada "case"

// let tech = "Javascript"
// switch (tech) {
//     case "HTML": //Menampung logika / nilai
//         console.log("Kerangka pada website");
//         break; // break berfungsi untuk menghentikan suatu proses pada case
//     case "CSS":
//         console.log("Berfungsi untuk mengatur style website");
//         break;
//     case "Javacript":
//         console.log("Berfungsi untuk menyimpan data");
//         break;

//     default:
//         console.log(`Informasi mengenai ${tech} tidak ditemukan`);
//         break;
// }
// console.log('Keluar dari switch');


let nilai = 10
switch (true) {
    case nilai % 2 == 0:
        console.log(`${nilai} Merupakan bilangan GENAP`);
        break;

    default:
        console.log(`${nilai} Merupakan bilangan GANJIL`);
        break;
}