let nilaiAngka = 85; //bisa di masukan nilai nya di sini
let nilaiHuruf;

if (nilaiAngka >= 80 && nilaiAngka <= 100) {
    nilaiHuruf = "A";
} else if (nilaiAngka >= 70 && nilaiAngka <= 79) {
    nilaiHuruf = "B";
} else if (nilaiAngka >= 60 && nilaiAngka <= 69) {
    nilaiHuruf = "C";
} else if (nilaiAngka >= 50 && nilaiAngka <= 59) {
    nilaiHuruf = "D";
} else if (nilaiAngka >= 0 && nilaiAngka < 50) {
    nilaiHuruf = "E";
} else {
    nilaiHuruf = "Nilai tidak valid";
}
console.log(`Nilai Angka: ${nilaiAngka}, Huruf: ${nilaiHuruf}`);