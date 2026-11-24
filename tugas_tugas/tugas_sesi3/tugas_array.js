// 1. Membuat array berisi nama 5 mahasiswa
let mahasiswa = ["Ginerta", "Fatur", "Maula", "Arya", "Trivaldi"];

// 2. Menampilkan semua nama menggunakan looping
console.log("--- Daftar Awal Mahasiswa ---");
for (let i = 0; i < mahasiswa.length; i++) {
    console.log(`${i + 1}. ${mahasiswa[i]}`);
}

// 3. Menambahkan 1 nama baru ke array menggunakan push() (tambah di akhir)
mahasiswa.push("Rashya");

// 4. Menghapus nama pertama menggunakan shift() (hapus di awal)
mahasiswa.shift();

// 5. Tampilkan kembali isi array setelah dimodifikasi
console.log("\n--- Daftar Mahasiswa Setelah Dimodifikasi ---");
for (let i = 0; i < mahasiswa.length; i++) {
    console.log(`${i + 1}. ${mahasiswa[i]}`);
}