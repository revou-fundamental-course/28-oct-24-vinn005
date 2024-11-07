//Validasi Form
function validateForm() {
    let beratBadan = document.getElementById('berat-badan').value;
    let tinggiBadan = document.getElementById('tinggi').value;
    let usiaSekarang = document.getElementById('usia').value;

    // Kondisi validasi jika form kosong atau tidak sesuai kriteria
    if (beratBadan == '' || tinggiBadan == '' || usiaSekarang == '') {
        alert('Inputan Anda Tidak Valid'); document.getElementById('result info info2').innerHTML = '-'
    } else if (tinggiBadan > 2.5) {
        alert ('Inputan Anda Tidak Valid'); document.getElementById('result info info2').innerHTML = '-'
    }
}

// Fungsi Hitung BMI
function hitungBMI(event) {
    // Mencegah form terefresh saat button dipencet
    event.preventDefault()

    // Variabel perhitungan BMI
    let beratBadan = document.getElementById('berat-badan').value;
    let tinggiBadan = document.getElementById('tinggi').value;

    // Formula menghitung BMI
    let bmi = (beratBadan / (tinggiBadan * tinggiBadan))

    // Tampilan hasil hitungan BMI
    document.getElementById('result').innerHTML = bmi.toFixed(1)

    // Penjelasan per kategori sesuai hasil yang muncul
    if (bmi <= 18.5) {
        document.getElementById('info').innerHTML = 'Anda Kekurangan Berat Badan'
        document.getElementById('info2').innerHTML = ' Disarankan untuk meningkatkan asupan kalori dan memperbanyak konsumsi makanan bergizi tinggi, seperti protein, karbohidrat kompleks, lemak sehat, dan vitamin. Konsultasi dengan ahli gizi juga dapat membantu dalam menyusun pola makan yang tepat untuk mencapai berat badan ideal. Berolahraga secara teratur, terutama latihan kekuatan, juga dapat membantu meningkatkan massa otot.'
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        document.getElementById('info').innerHTML = 'Berat Badan Anda Normal (Ideal)'
        document.getElementById('info2').innerHTML = 'Penting untuk menjaga pola makan seimbang dan mempertahankan aktivitas fisik secara teratur untuk menjaga BMI tetap stabil. Hindari makanan yang tinggi gula dan lemak trans, serta perbanyak konsumsi sayuran, buah, protein, dan biji-bijian. Berolahraga secara rutin minimal 150 menit per minggu untuk kesehatan tubuh yang optimal.'
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById('info').innerHTML = 'Anda Kelebihan Berat Badan'
        document.getElementById('info2').innerHTML = 'Disarankan untuk mengurangi asupan kalori dengan menghindari makanan tinggi gula, lemak jenuh, dan makanan olahan. Perbanyak konsumsi makanan kaya serat seperti sayuran, buah, dan protein tanpa lemak. Olahraga yang intens seperti aerobik dan latihan kekuatan dapat membantu menurunkan berat badan dan meningkatkan kebugaran.'
    } else if (bmi >= 30) {
        document.getElementById('info').innerHTML = 'Anda Kegemukan (Obesitas)'
        document.getElementById('info2').innerHTML = 'Penting untuk berkonsultasi dengan dokter atau ahli gizi untuk mendapatkan panduan penurunan berat badan yang sesuai. Pola makan rendah kalori dan tinggi serat, bersama olahraga teratur, sangat direkomendasikan. Latihan aerobik, seperti berlari atau bersepeda, serta latihan kekuatan dapat membantu mengurangi lemak tubuh secara efektif. Dalam kasus tertentu, dokter mungkin menyarankan metode lain, seperti terapi, program penurunan berat badan, atau intervensi medis jika diperlukan.'
    }
}