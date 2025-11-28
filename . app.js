// ============== ABSENSI ==============
document.getElementById("absensiForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const kelas = document.getElementById("kelas").value;

    const data = {
        nama: nama,
        kelas: kelas,
        waktu: new Date().toLocaleString("id-ID")
    };

    // Simpan ke localStorage
    let absensi = JSON.parse(localStorage.getItem("absensiBasket")) || [];
    absensi.push(data);
    localStorage.setItem("absensiBasket", JSON.stringify(absensi));

    document.getElementById("status").innerText = "Absensi berhasil dikirim!";
    document.getElementById("absensiForm").reset();
});


// ============== ANALISA MARKET ==============
document.getElementById("btnAnalisa").addEventListener("click", function() {
    const metode = document.getElementById("metode").value;
    const box = document.getElementById("hasilAnalisa");

    let text = "";

    if (metode === "teknikal") {
        text = `
            <h3>Analisa Teknikal</h3>
            <p>• Trend market hari ini berada pada fase bullish moderat.</p>
            <p>• Indikator RSI menunjukkan potensi overbought.</p>
            <p>• Support terdekat: 6.850 • Resistance: 7.030</p>
        `;
    } else {
        text = `
            <h3>Analisa Fundamental</h3>
            <p>• Market dipengaruhi rilis data inflasi terbaru.</p>
            <p>• Sektor energi meningkat karena kenaikan harga minyak.</p>
            <p>• Investor menunggu data ekonomi global minggu ini.</p>
        `;
    }

    box.innerHTML = text;
});
