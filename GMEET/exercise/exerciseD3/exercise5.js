// Create a fybctuib ti calculate Body Mass Index (BMI)
// Formula : BMI = woght(kg) / (Height(meter))^2
// Parameter : Weight & height
// Return value
    // - <18.5 return "less weight"
    // - 18.5 - 24.9 Return "Ideal"
    // - 25.0 - 29.9 Return "overweight"
    // - 30.0 - 39.9 Return "Very overweight"
    // - > 39.9 Return "Obesity"


const BMI = (weight, heightCm) => {

    let heightM = heightCm / 100;
    let index = weight / Math.pow(heightM,2);

    if (index < 18.5) {
        return "Less weight";
    }else if (index >= 18.5 && index <= 24.9) {
        return "Ideal";
    }else if (index >= 25.0 && index <= 29.9) {
        return "Overweight";
    }else if (index >= 30.0 && index <= 39.9) {
        return "Very Overweight";
    }else{
        return "Obesity"
    }
}

console.log(BMI(53,153));