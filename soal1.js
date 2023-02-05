var prompt = require('prompt-sync')();

//? Buatlah sebuah program dari akar pangkat 2 dari x dengan x harus bilangan genap dengan kondisi sebagai berikut:
//? - jika user input angka kurang dari 0, user get error message: tidak bisa input bilangan negatif
//? - jika user input angka ganjil, user get error message tidak bisa input bilangan ganjil
//? - hint: gunakan sqrt(x)

//? x harus bilangan genap
//? jika input < 0, error
//? jika input ganjil, error
//? input harus berupa angka


function akar_pangkat_dua(angka) {
    if(isNaN(angka)){
        console.log('Error: Input harus berupa angka');
        return
    }

    if(angka < 0) {
        console.log("Error: tidak bisa input bilangan negatif")
        return
    }

    if(angka % 2 !== 0) {
        console.log('Error: tidak bisa input bilangan ganjil')
        return
    }

    const hasil = Math.sqrt(angka)

    console.log('Hasil: ', hasil)
    return
}

const input_user =  prompt("Masukkan angka: ")
akar_pangkat_dua(input_user)