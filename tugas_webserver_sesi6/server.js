const http = require('http');

// Data JSON dikoreksi penulisan kutip dan kurungnya agar valid sesuai standar JavaScript
const motoGP = [
    { circuit: 'Losail', location: 'Qatar', winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' } },
    { circuit: 'Autodromo', location: 'Argentine', winner: { firstName: 'Cal', lastName: 'Crutchlow', country: 'UK' } },
    { circuit: 'De Jerez', location: 'Spain', winner: { firstName: 'Valentino', lastName: 'Rossi', country: 'Italy' } },
    { circuit: 'Mugello', location: 'Italy', winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' } }
];

const server = http.createServer((req, res) => {
    // [Edge case] Mengabaikan request otomatis dari browser untuk ikon web
    if (req.url === '/favicon.ico') {
        res.writeHead(204);
        return res.end();
    }

    // 1. URL http://localhost:8000 -> Tampil semua data
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(motoGP, null, 2)); // null, 2 digunakan agar JSON tampil rapi (pretty print)
    } 
    
    // 2. URL http://localhost:8000/country -> Dikelompokkan berdasarkan negara pemenang
    else if (req.url === '/country') {
        const groupedByCountry = motoGP.reduce((akumulator, item) => {
            const negara = item.winner.country;
            if (!akumulator[negara]) akumulator[negara] = [];
            akumulator[negara].push(item);
            return akumulator;
        }, {});

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(groupedByCountry, null, 2));
    } 
    
    // 3. URL http://localhost:8000/name -> Dikelompokkan berdasarkan nama pemenang
    else if (req.url === '/name') {
        const groupedByName = motoGP.reduce((akumulator, item) => {
            const namaLengkap = `${item.winner.firstName} ${item.winner.lastName}`;
            if (!akumulator[namaLengkap]) akumulator[namaLengkap] = [];
            akumulator[namaLengkap].push(item);
            return akumulator;
        }, {});

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(groupedByName, null, 2));
    } 
    
    // 4. URL lain -> Memunculkan respons teks "Bad Request" dengan status HTTP 400
    else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end("Bad Request");
    }
});

server.listen(8000, () => {
    console.log("Web server menyala!");
    console.log("Uji rute berikut di browser Anda:");
    console.log("1. Keseluruhan Data  : http://localhost:8000/");
    console.log("2. Filter by Country : http://localhost:8000/country");
    console.log("3. Filter by Name    : http://localhost:8000/name");
    console.log("4. Tes Bad Request   : http://localhost:8000/asal-ketik");
});