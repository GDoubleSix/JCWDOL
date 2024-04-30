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