"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var dataMahasiswa;
dataMahasiswa = {
    statusCode: 200,
    message: "success",
    data: [
        {
            nama: "Firman Subagja",
            nim: 3242425,
            umur: 24,
            jenisKelamin: types_1.Gender.MALE,
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
