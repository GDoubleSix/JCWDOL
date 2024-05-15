////////////////////////////////////////////////////////////////////////////////
// LOOP WITH ARRAY : Melakukan Looping untuk memproses setiap data pada array
////////////////////////////////////////////////////////////////////////////////

/*

    Result

    Terdapat 5 kategori film :
    Horor
    Sci-Fi
    Thriller
    Adventure
    Animation

*/

let category = ["Horor", "Sci-Fi", "Thriller", "Adventure", "Animation"]

let list = (`Terdapat 5 kategori film : \n`)
for(let i = 0; i < category.length; i++){
    list += category[i] + '\n'
}
console.log(list);