// (1) Write a code to convert celsius to fahrenheit
// Example: 60 Celcius → 140 Fahrenheit

// (60 °C × 9/5) + 32 = 140 °F

// let celcius = 30
// let fahrenheit = (celcius * (9/5)) + 32
// console.log(`${fahrenheit} Fahrenheit`);

var convertTemperature = function(celsius) {
    let result = [];
    
    let fahrenheit = (celsius * 1.80 + 32.00).toFixed(5);;
    
    let kelvin = (celsius + 273.15).toFixed(5);
    
    result.push(fahrenheit, kelvin)
    
    return result
};
console.log(convertTemperature(36.50));
