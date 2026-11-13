// file: format.js
const formatRupiah = (angka) => {
    const nilai = Number(angka);
    // Jika data kosong atau bukan angka, kembalikan Rp0
    if (isNaN(nilai)) return "Rp0";

    return new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(nilai);
};

module.exports = formatRupiah;