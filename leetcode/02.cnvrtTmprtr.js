var convertTemperature = function(celsius) {
    let result = [];
    
    let fahrenheit = (celsius * 1.80 + 32.00);;
    
    let kelvin = (celsius + 273.15);
    
    result.push(kelvin, fahrenheit).toFixed(5)
    
    return result
};