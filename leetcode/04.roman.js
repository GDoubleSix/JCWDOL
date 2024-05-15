function romanToInt(s) {
    const romanSymbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let currentSymbolValue = 
        
        
        
        
        romanSymbols[s[i]];
        let nextSymbolValue = romanSymbols[s[i + 1]];

        if (nextSymbolValue && nextSymbolValue > currentSymbolValue) {
            result -= currentSymbolValue;
        } else {
            result += currentSymbolValue;
        }
    }

    return result;
}

console.log(romanToInt("XV")); 