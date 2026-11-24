let studentsScore = [
    { name: 'Andi', score: 90 },
    { name: 'Rudi', score: 80 },
    { name: 'Dira', score: 100 }
];

// Mengasumsikan siswa pertama sebagai yang tertinggi di awal
let siswaTerbaik = studentsScore[0];

// Melakukan looping untuk membandingkan skor
for (let i = 1; i < studentsScore.length; i++) {
    if (studentsScore[i].score > siswaTerbaik.score) {
        siswaTerbaik = studentsScore[i];
    }
}

// Menampilkan output
console.log(`Nama: ${siswaTerbaik.name}, Nilai: ${siswaTerbaik.score}`);