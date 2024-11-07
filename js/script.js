// Ini Javascript

console.log('Hello World');

function validateForm() {
    let beratBadan = document.getElementById('berat-badan').value;
    let tinggiBadan = document.getElementById('tinggi').value;
    let usiaSekarang = document.getElementById('usia').value;

    // Kondisi Validasi jika form kosong
    if (beratBadan == '' || tinggiBadan == '' || usiaSekarang == '' || parseInt(beratBadan, tinggiBadan, usiaSekarang) <= 1) {
        alert('Inputan Anda Tidak Valid')
    
    } else {
        document.getElementById('result').innerHTML = (beratBadan);
    }
       
    }
    
    console.log(beratBadan);


console.log(document.getElementById('result').innerHTML);
