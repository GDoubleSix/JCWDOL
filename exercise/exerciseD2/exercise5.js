// (5) Write a code to find factorial of a number
// Example:4!→4×3x2×1=24
// Example:6!→6×5x4x3x2x1=720

jumlah = 1
facNumber = 6
for (let i = facNumber; i >= 1; i--) {
    jumlah *= i
}
console.log(jumlah);
