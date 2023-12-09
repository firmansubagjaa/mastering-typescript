"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataMahasiswaResponse;
var DataMataKuliahResponse;
DataMahasiswaResponse = {
    statusCode: 200,
    message: "success",
    data: {
        nama: "Firman",
        age: 25,
        semester: 7,
    },
};
DataMataKuliahResponse = {
    statusCode: 200,
    message: "success",
    data: [
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
};
// console.log(DataMahasiswaResponse);
console.log(DataMahasiswaResponse);
console.log(DataMataKuliahResponse);
