// type BiodataMahasiswa = {
//   name: string;
//   age: number;
//   isMarried: boolean;
//   courses: (string | number)[];
// }[];

// let BiodataMahasiswa: BiodataMahasiswa;

// BiodataMahasiswa = [
//   {
//     name: "Firman",
//     age: 25,
//     isMarried: false,
//     courses: ["Algoritma Pemrograman", "Basis Data", "Kalkulus"],
//   },
//   {
//     name: "Akbar",
//     age: 24,
//     isMarried: true,
//     courses: ["Algoritma Pemrograman", "Basis Data", "Kalkulus"],
//   },
// ];

// console.log(BiodataMahasiswa);
// type NamaLenkap = string;

type BiodataMahasiswa = {
  name: string;
  age: number;
  isMarried: boolean;
  courses: (string | number)[];
}[];

let BiodataMahasiswa: BiodataMahasiswa = [
  {
    name: "Firman",
    age: 25,
    isMarried: false,
    courses: ["Algoritma Pemrograman", "Basis Data", "Kalkulus"],
  },
];
