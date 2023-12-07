// type aliases

// primitive
type NamaLengkap = string;
type Umur = number;
type IsMarried = boolean;

// non-primitive
// array
type MataKuliah = string[];

// object
type Mahasiswa = {
  name: string;
  age: number;
  isMarried: boolean;
  mataKuliah: string[];
};

let namaLengkap: NamaLengkap;
let umur: Umur;
let isMarried: IsMarried;
let mataKuliah: MataKuliah;

let mahasiswa: Mahasiswa;

namaLengkap = "Firman";
umur = 24;
isMarried = true;
mataKuliah = ["Algoritma Pemrograman", "Basis Data", "Kalkulus"];

mahasiswa = {
  name: "Firman",
  age: 25,
  isMarried: false,
  mataKuliah: ["Algoritma Pemrograman", "Basis Data", "Kalkulus"],
};

console.log(mahasiswa);
