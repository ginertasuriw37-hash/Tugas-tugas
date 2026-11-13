// file: logger.js
const cetakHeader = (judul) => {
    console.log(`\n=========================================`);
    console.log(`  ${judul.toUpperCase()}`);
    console.log(`=========================================`);
};

const cetakBaris = (label, nilai) => {
    // padEnd digunakan agar titik dua (:) sejajar rapi
    console.log(`${label.padEnd(20, ' ')} : ${nilai}`);
};

const cetakPeringatan = (pesan) => {
    console.log(`-----------------------------------------`);
    console.log(`[!] STATUS: ${pesan}`);
    console.log(`=========================================\n`);
};

module.exports = { cetakHeader, cetakBaris, cetakPeringatan };