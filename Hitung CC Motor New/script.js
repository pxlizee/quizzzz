function hitungCC() {
    const diameter = parseFloat(document.getElementById('diameter').value);
    const langkah = parseFloat(document.getElementById('langkah').value);
    const jumlahSilinder = parseInt(document.getElementById('jumlahSilinder').value);

    if (isNaN(diameter) || isNaN(langkah) || isNaN(jumlahSilinder) || diameter <= 0 || langkah <= 0 || jumlahSilinder <= 0) {
        alert("Silakan masukkan nilai yang valid.");
        return;
    }

    // Rumus menghitung kapasitas mesin (cc)
    const cc = (Math.PI * Math.pow(diameter / 2, 2) * langkah * jumlahSilinder) / 1000;
    document.getElementById('hasil').innerText = `Kapasitas Mesin: ${cc.toFixed(2)} cc`;
    document.getElementById('popup').style.display = 'flex';
}

function tutupPopup() {
    document.getElementById('popup').style.display = 'none';
}