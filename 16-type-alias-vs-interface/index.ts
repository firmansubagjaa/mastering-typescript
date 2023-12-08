// type mahasiswa = {
//   name: string;
//   nim: number;
// };

// type mahasiswa = {
//   gender: "laki laki" | "perempuan";
//   age: number;
// };

// type bersifat immutable dan tidak dapat diubah
// interface bersifat mutable dan dapat diubah maupun ditambah

// object diperluas dengan type alias
// type Mahasiswa = {
//   nama: string;
//   nim: number;
//   umur: number;
// };

// type Alumni = {
//   tahunLulus: number;
//   pekerjaan: string;
// };

// const mhs1: Mahasiswa & Alumni = {
//   nama: "Firman",
//   nim: 123456,
//   umur: 25,
//   pekerjaan: "Mahasiswa",
//   tahunLulus: 2022,
// };

// let mhs2: Mahasiswa & Alumni;

// mhs2 = {
//   nama: "Farhan",
//   nim: 2423425,
//   umur: 25,
//   pekerjaan: "Mahasiswa",
//   tahunLulus: 2022,
// };

// object diperluas dengan interface
interface Mahasiswa {
  name: string;
  nim: number;
  umur: number;
}

interface Alumni extends Mahasiswa {
  pekerjaan: string;
  tahunLulus: number;
}

const mh1: Alumni = {
  name: "Firman",
  nim: 123456,
  umur: 25,
  pekerjaan: "Mahasiswa",
  tahunLulus: 2022,
};

console.log(mh1);
