import { ResponseData, Gender, Mahasiswa } from "./types";

let dataMahasiswa: ResponseData<Mahasiswa[]>;

dataMahasiswa = {
  statusCode: 200,
  message: "success",
  data: [
    {
      nama: "Firman Subagja",
      nim: 3242425,
      umur: 24,
      jenisKelamin: Gender.MALE,
      semester: 7,
      mataKuliah: [
        {
          kode: "PBO",
          nama: "Pemograman Berbasis Objek",
          semester: 7,
          sks: 3,
        },
        {
          kode: "OOP",
          nama: "Object Oriented Programming",
          semester: 7,
          sks: 3,
        },
      ],
    },
  ],
};

console.log(dataMahasiswa);
