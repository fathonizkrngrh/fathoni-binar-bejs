const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Main
console.log(
  `1. Tambah
    2. Kurang
    3. Kali
    4. Bagi
    5. Akar
    6. Kuadrat
    7. Luas Persegi
    8. Volume Kubus
    9. Volume Tabung
    10. Keluar
    `
);

rl.question("Pilih menu (1/2/3/4/5) !!! : ", function (menu) {
  switch (menu) {
    case "1":
      tambah();
      break;
    case "2":
      kalkulasi(kurang);
      break;
    case "3":
      kalkulasi(kali);
      break;
    case "4":
      kalkulasi(bagi);
      break;
    case "5":
      akar();
      break;
    case "6":
      kuadrat();
      break;
    case "7":
      luasPersegi();
      break;
    case "8":
      volumeKubus();
      break;
    case "9":
      volumeTabung();
      break;
    case "10":
      process.exit(1);
      break;
  }
});

// Sub
function tambah() {
  rl.question("masukkan angka pertama ", function (angka1) {
    rl.question("masukkan angka kedua ", function (angka2) {
      let hasil = parseInt(angka1) + parseInt(angka2);
      console.log(`Hasil dari ${angka1} + ${angka2} = ${hasil}\n`);
      rl.close();
    });
  });
}
function kurang() {
  rl.question("masukkan angka pertama ", function (angka1) {
    rl.question("masukkan angka kedua ", function (angka2) {
      let hasil = parseInt(angka1) - parseInt(angka2);
      console.log(`Hasil dari ${angka1} - ${angka2} = ${hasil}\n`);
      rl.close();
    });
  });
}
function kali() {
  rl.question("masukkan angka pertama ", function (angka1) {
    rl.question("masukkan angka kedua ", function (angka2) {
      let hasil = parseInt(angka1) * parseInt(angka2);
      console.log(`Hasil dari ${angka1} x ${angka2} = ${hasil}\n`);
      rl.close();
    });
  });
}
function bagi() {
  rl.question("masukkan angka pertama :", function (angka1) {
    rl.question("masukkan angka kedua :", function (angka2) {
      let hasil = parseInt(angka1) / parseInt(angka2);
      console.log(`Hasil dari ${angka1} : ${angka2} = ${hasil}\n`);
      rl.close();
    });
  });
}
function akar() {
  rl.question("masukkan angka : ", function (angka) {
    let hasil = Math.sqrt(angka);
    console.log(`Hasil dari akar ${angka}  = ${hasil}\n`);
    rl.close();
  });
}
function kuadrat() {
  rl.question("masukkan angka : ", function (angka) {
    let hasil = angka * angka;
    console.log(`Hasil dari ${angka} pangkat 2 = ${hasil}\n`);
    rl.close();
  });
}

function luasPersegi() {
  rl.question("masukkan panjang sisi ", function (sisi) {
    let lPersegi = sisi * sisi;
    console.log(`Luas Persegi dengan sisi ${sisi} adalah ${lPersegi}`);
    rl.close();
  });
}

function volumeKubus() {
  rl.question("masukkan panjang rusuk ", function (rusuk) {
    let vKubus = rusuk * rusuk * rusuk;
    console.log(`Volume kubus dengan rusuk  ${rusuk} adalah ${vKubus}\n`);
    rl.close();
  });
}

function volumeTabung() {
  rl.question("masukkan panjang rusuk ", function (r) {
    rl.question("masukkan panjang tinggi ", function (t) {
      let vTabung = (22 / 7) * r * r * t;
      console.log(
        `Volume tabung dengan jari-jari  ${r} dan tinggi ${t} adalah ${vTabung}\n`
      );
      rl.close();
    });
  });
}
rl.on("close", function () {
  console.log("\n Terimakasih !!!");
  process.exit(0);
});
