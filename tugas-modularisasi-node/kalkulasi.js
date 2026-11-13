// file: kalkulasi.js
const hitungTotal = (dataTransaksi, tipe) => {
    // Validasi input harus berupa array
    if (!Array.isArray(dataTransaksi)) {
        throw new Error("Input data transaksi harus berupa array.");
    }

    return dataTransaksi
        .filter(transaksi => transaksi.tipe === tipe)
        .reduce((total, transaksi) => {
            const nominal = Number(transaksi.nominal);
            // Validasi apakah nominal benar-benar angka yang valid
            if (isNaN(nominal)) {
                throw new Error(`Data tidak valid pada deskripsi: ${transaksi.deskripsi}`);
            }
            return total + nominal;
        }, 0);
};

module.exports = hitungTotal;