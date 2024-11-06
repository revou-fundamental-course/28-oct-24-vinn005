// Ini Javascript

console.log('Hello World');

function validateForm() {
    let beratBadan = document.getElementById('berat-badan').value;
    // Kondisi Validasi jika form kosong
    if (beratBadan == '' || parseInt(beratBadan) < 0) {
        alert('Inputan Anda Kosong')
    } else {
        document.getElementById('result').innerHTML = beratBadan;
    }
    console.log(beratBadan);
}

console.log(document.getElementById('result').innerHTML);
