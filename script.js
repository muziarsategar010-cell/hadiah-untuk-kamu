```javascript
document.addEventListener("DOMContentLoaded", function () {

    // PENGHITUNG HARI BERSAMA
    const daysElement = document.getElementById("daysTogether");

    // GANTI DENGAN TANGGAL KALIAN JADIAN
    // Format: TAHUN-BULAN-TANGGAL
    const tanggalJadian = new Date("2025-01-01T00:00:00");

    if (daysElement) {
        const sekarang = new Date();

        // Menghitung selisih berdasarkan tanggal kalender
        const awal = new Date(
            tanggalJadian.getFullYear(),
            tanggalJadian.getMonth(),
            tanggalJadian.getDate()
        );

        const hariIni = new Date(
            sekarang.getFullYear(),
            sekarang.getMonth(),
            sekarang.getDate()
        );

        const selisih = Math.floor(
            (hariIni - awal) / (1000 * 60 * 60 * 24)
        );

        if (selisih >= 0) {
            daysElement.textContent = selisih + " Hari ♡";
        } else {
            daysElement.textContent = "♡";
        }
    }

});
```
