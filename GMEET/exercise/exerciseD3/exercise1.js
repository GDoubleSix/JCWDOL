// create a function that can create triangle pattern according to the height provide like the following :
// 1
// 12
// 123
// 1234
// 12345

// parameter : heigh -> triangle height
// example input : 5

const segitiga = (triangle) => {
    const pattern = []
    for (let i = 1; i <= triangle ; i++) {
        const row = []
        for(let j = 1; j<=i; j++ ){
            row.push(j)
        }
        pattern.push(row.join(''))
    }
    return pattern.join('\n')
}
console.log(segitiga(5));
