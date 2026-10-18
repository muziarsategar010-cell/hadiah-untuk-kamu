```javascript
document.addEventListener("DOMContentLoaded", function () {
    const daysElement = document.getElementById("daysTogether");

    // GANTI tanggal ini dengan tanggal kalian jadian
    // Format: TAHUN-BULAN-TANGGAL
    const tanggalJadian = new Date("2025-01-01T00:00:00");

    if (!daysElement) return;

    const sekarang = new Date();

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

    daysElement.textContent =
        selisih >= 0 ? selisih + " Hari ♡" : "♡";
});
```