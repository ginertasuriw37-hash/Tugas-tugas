var motoGP = [
    { circuit: 'Losail', location: 'Qatar', winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' } },
    { circuit: 'Autodromo', location: 'Argentine', winner: { firstName: 'Cal', lastName: 'Crutchlow', country: 'UK' } },
    { circuit: 'De Jerez', location: 'Spain', winner: { firstName: 'Valentino', lastName: 'Rossi', country: 'Italy' } },
    { circuit: 'Mugello', location: 'Italy', winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' } }
];

let result = {};

for (let i = 0; i < motoGP.length; i++) {
    let event = motoGP[i];
    let country = event.winner.country;
    
    // Menyusun objek data baru sesuai format output yang diminta
    let winningData = {
        name: `${event.winner.firstName} ${event.winner.lastName}`,
        winLocation: `${event.circuit}, ${event.location}`
    };

    // Jika negara belum terdaftar di dalam objek 'result', buat inisialisasi kerangkanya
    if (!result[country]) {
        result[country] = {
            winningCircuits: [],
            totalWin: 0
        };
    }

    // Memasukkan (push) data kemenangan dan menambahkan (increment) total kemenangannya
    result[country].winningCircuits.push(winningData);
    result[country].totalWin++;
}

// Menampilkan output hasil grouping (menggunakan JSON.stringify agar format rapi)
console.log(JSON.stringify(result, null, 2));