//Pseudocode
// 1. Mulai

// 2. Masukkan jumlah hari (days)

// 3. Hitung jumlah tahun (years):

// 4. Hitung sisa hari setelah mengurangi tahun dari total_days (remainder_days):

// 5. Hitung jumlah bulan (months):

// 6. Hitung sisa hari setelah mengurangi bulan dari remainder_days (remaining_days):

// 7. Tampilkan hasilnya dalam format "years year(s) months month(s) remaining_days day(s)"

// 8. Selesai


const days = 400
const remainderDays = days % 365 //Modulo
const years = Math.floor(days / 365)
const month = Math.floor (days / 30)
const remainingDays = Math.floor(remainderDays % 30)

console.log(`${years} years, ${month} month, ${remainingDays} days`);


//=======================================================================
const hari = 400;
const tahun = Math.floor(hari/365);
const bulan = Math.floor((hari % 365)/30);
const tanggal = Math.floor((hari%365)%365);

console.log(`${tahun} years, ${bulan} month, ${tanggal} days`);