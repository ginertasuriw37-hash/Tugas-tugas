// file: app.js
const hitungTotal = require('./kalkulasi');
const { hitungSaldoAkhir, kalkulasiLimitHarian, cekStatusKesehatanBulanIni } = require('./analisis');
const formatRupiah = require('./format');
const { cetakHeader, cetakBaris, cetakPeringatan } = require('./logger');

// Blok Try-Catch untuk menangkap error dari modul
try {
    // 1. Data Riwayat Transaksi (termasuk tipe 'utang' untuk simulasi yang lebih nyata)
    const dataKeuangan = [
        { deskripsi: 'Transfer Bulanan', nominal: 1200000, tipe: 'masuk' },
        { deskripsi: 'Jual Buku Bekas', nominal: 150000, tipe: 'masuk' },
        { deskripsi: 'Bayar Kos', nominal: 700000, tipe: 'keluar' },
        { deskripsi: 'Beli Token Listrik', nominal: 100000, tipe: 'keluar' },
        { deskripsi: 'Makan Warteg', nominal: 350000, tipe: 'keluar' },
        { deskripsi: 'Utang Teman (Bulan Lalu)', nominal: 50000, tipe: 'utang' } // Fitur tambahan
    ];

    const sisaHariBulanIni = 12; // Simulasi: sisa 12 hari sebelum bulan berganti

    // 2. Eksekusi Modul Kalkulasi
    const totalPemasukan = hitungTotal(dataKeuangan, 'masuk');
    const totalPengeluaran = hitungTotal(dataKeuangan, 'keluar');
    const totalUtang = hitungTotal(dataKeuangan, 'utang');
    
    // 3. Eksekusi Modul Analisis
    const saldoAkhir = hitungSaldoAkhir(totalPemasukan, totalPengeluaran, totalUtang);
    const limitHarian = kalkulasiLimitHarian(saldoAkhir, sisaHariBulanIni);
    const statusKeuangan = cekStatusKesehatanBulanIni(saldoAkhir, 200000);

    // 4. Eksekusi Modul Logger & Format untuk Output Terminal
    cetakHeader('Laporan Keuangan KosKas');
    cetakBaris('Pemasukan', formatRupiah(totalPemasukan));
    cetakBaris('Pengeluaran', formatRupiah(totalPengeluaran));
    
    if (totalUtang > 0) {
        cetakBaris('Pembayaran Utang', formatRupiah(totalUtang));
    }
    
    console.log(`-----------------------------------------`);
    cetakBaris('SISA SALDO AKTIF', formatRupiah(saldoAkhir));
    cetakBaris(`Limit Harian (${sisaHariBulanIni} hari)`, formatRupiah(limitHarian));
    
    cetakPeringatan(statusKeuangan);

} catch (error) {
    // Jika ada data rusak, sistem akan masuk ke sini alih-alih crash
    console.log(`\n[X] TERJADI KESALAHAN SISTEM: ${error.message}\n`);
}