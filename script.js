
const pinForm = document.getElementById("pinForm");
const pinInput = document.getElementById("pin");
const pinMessage = document.getElementById("pinMessage");

const login = document.getElementById("login");
const content = document.getElementById("content");

// GANTI dengan tanggal jadian kalian.
// Format: TAHUN-BULAN-TANGGAL
const tanggalJadian = "2025-11-17";

pinForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (pinInput.value === "010608") {
        login.hidden = true;
        content.hidden = false;

        hitungHariJadian();
        window.scrollTo(0, 0);
    } else {
        pinMessage.textContent =
            "PIN-nya belum benar, coba lagi ya ♡";

        pinInput.value = "";
        pinInput.focus();
    }
});

function hitungHariJadian() {
    const awal = new Date(tanggalJadian + "T00:00:00");
    const sekarang = new Date();

    awal.setHours(0, 0, 0, 0);
    sekarang.setHours(0, 0, 0, 0);

    const elemen = document.getElementById("daysTogether");

    if (Number.isNaN(awal.getTime())) {
        elemen.textContent = "♡";
        return;
    }

    if (sekarang < awal) {
        elemen.textContent = "Segera ♡";
        return;
    }

    const selisih = sekarang.getTime() - awal.getTime();
    const hari = Math.floor(
        selisih / (1000 * 60 * 60 * 24)
    );

    elemen.textContent = hari.toLocaleString("id-ID");
}
