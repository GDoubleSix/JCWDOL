// 1. Mulai

// 2. Masukkan tanggal pertama (T1)
// 3. Masukkan tanggal kedua (T2)

// 4. Hitung selisih antara T1 dan T2:
//     4.1. Hitung T2 - T1 jika T2 > T1
//     4.2. Hitung T1 - T2 jika T1 > T2

// 5. Tampilkan hasilnya dalam bentuk hari

// 6. Selesai


function selisih(tanggal1,tanggal2){
    if(tanggal1 > tanggal2){
        let hitungT1 = tanggal1 - tanggal2

        console.log(`\n"Tanggal A = 2022-01-${tanggal1}"\n"Tanggal B = 2022-01-${tanggal2}"`);
        console.log(`Selisih Tanggal = ${hitungT1}`);

    }else if(tanggal2 > tanggal1){
        let hitungT2 = tanggal2 - tanggal1

        console.log(`\n"Tanggal A = 2022-01-${tanggal1}"\n"Tanggal B = 2022-01-${tanggal2}"`);
        console.log(`Selisih Tanggal = ${hitungT2}`);
        
    }else{
        console.log('Tanggal yang dimasukkan sama');
    }
}

let tanggal1 = 18
let tanggal2 = 28
selisih(tanggal1,tanggal2)


//==========================================================================================

const date1 = new Date("2023-11-01")
const date2 = new Date("2023-10-20")
const bedaTanggal = Math.abs(date2 - date1) //math absolute => hasilnya akan selalu positif

const bedaHari = Math.round(bedaTanggal / (1000 *3600 * 24)) //Math.round untuk pembulatan angka
console.log(`Perbedaan hari ${bedaHari}`);