// interface Titik {
//   x: number;
//   y: number;
// }
// // menambah atribute dari interface yang sama
// interface Titik {
//   z: number;
// }

// const titik: Titik = {
//   x: 10,
//   y: 20,
//   z: 30,
// };

// console.log(`x: ${titik.x}, y: ${titik.y}`);

// interface extends

interface Kendaraan {
  merek: string;
  tahun: number;
  pemilik: string;
  warna: string;
  kapasitas: number;
}

interface Motor extends Kendaraan {
  tipe: string;
  mesin: number;
  helm: string;
}

interface Mobil extends Kendaraan {
  tipe: string;
  mesin: number;
  jumlahPintu: number;
}

const motor1: Motor = {
  merek: "honda",
  tahun: 2010,
  pemilik: "Firman",
  warna: "hitam",
  kapasitas: 1,
  tipe: "mobil",
  mesin: 1,
  helm: "yes",
};

const mobil2: Mobil = {
  merek: "honda",
  tahun: 2010,
  pemilik: "Firman",
  warna: "hitam",
  kapasitas: 1,
  tipe: "mobil",
  mesin: 1,
  jumlahPintu: 1,
};
