// file: analisis.js
const hitungSaldoAkhir = (pemasukan, pengeluaran, utang = 0) => {
    return pemasukan - pengeluaran - utang;
};

const kalkulasiLimitHarian = (saldo, sisaHari) => {
    // Logika pengamanan (Edge Cases)
    if (sisaHari <= 0) return saldo; // Jika ini hari terakhir, semua saldo bisa dipakai
    if (saldo <= 0) return 0;        // Mencegah nilai minus dibagi hari (tidak logis untuk limit)
    
    return Math.floor(saldo / sisaHari);
};

const cekStatusKesehatanBulanIni = (saldo, batasAman = 150000) => {
    if (saldo < 0) return "DEFISIT (Terdapat pengeluaran/utang melebihi kapasitas)";
    if (saldo < batasAman) return "WASPADA (Saldo menipis, segera aktifkan mode hemat)";
    return "AMAN (Sisa saldo mencukupi hingga akhir bulan)";
};

module.exports = { hitungSaldoAkhir, kalkulasiLimitHarian, cekStatusKesehatanBulanIni };