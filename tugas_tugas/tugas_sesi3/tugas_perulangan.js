console.log("Ganjil 1-20 dengan FOR");
for (let i = 1; i <= 20; i++) {
    // Mengecek apakah ganjil
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("Ganjil 1-20 dengan WHILE");
let j = 1;
while (j <= 20) {
    // Mengecek apakah ganjil
    if (j % 2 !== 0) {
        console.log(j);
    }
    j++;
}