/////////////////////////////////////
// BREAK : Menghentikan proses Loop
/////////////////////////////////////

/////////////////
// print 1 - 3
////////////////

//Loop hingga 5 kali dan berhenti pada saat iterasi ke 3
// for(let i = 1; i <= 5; i++){

    //Jika iterasi = 4 maka hentikan looping
//     if(i == 4) break

//     console.log(`loop ke : ${i}`);
// }


///////////////////////////////////////////////////
// Mencari angka random (0 - 99) yang dapat dibagi 5
///////////////////////////////////////////////////



while (true) {
    // mendapatkan angka random (0-99)
    let randomNumber = Math.floor(Math.random()* 100)
    
    //Menampilkan angka randomg
    console.log(randomNumber);

    //Jika angka random dibagi 5 maka hentikan kondisi
    if (randomNumber %5 === 0 ) break

        // randomNumber++

}