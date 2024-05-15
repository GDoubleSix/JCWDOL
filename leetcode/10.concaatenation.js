var getConcatenation = function(nums) {
    nums = [1,2,1]
    const nums2 = nums.length
    for(let i = 0; i<=nums.length-1; i++){
        nums[i] += nums2[i]
        console.log(nums[i])
        // return nums 
    }
};
console.log(getConcatenation(121));

// let stars = ''
// let rows = 2

// // Loop i untuk membuat baris
// // Banyaknya loop i ditentukan dari variabel rows
// for (let i = 1; i<=rows; i++){
    
//     // Loop j untuk menambahkan bintang per baris
//     // Banyaknya bintang setiap baris = jumlah baris
//     for(let j = 1; j<=rows; j++){
//         // Menambahkan 1 bintang dari nilai sebelmunya
//         stars += ' 1,2,1 '
//     }
//     // Menambahkan new line setiap selesai loop j / 1 baris bintang
//     stars += '\n'
// }
// console.log(stars);