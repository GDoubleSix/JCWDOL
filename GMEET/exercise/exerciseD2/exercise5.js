// (5) Write a code to find factorial of a number
// Example:4!→4×3x2×1=24
// Example:6!→6×5x4x3x2x1=720

number = 8
facNumber = 1
for (let i = number; i >= 1; i--) {
    facNumber *= i
    console.log(i);
    console.log(facNumber);
}
console.log(`${number}! = ${facNumber}`);