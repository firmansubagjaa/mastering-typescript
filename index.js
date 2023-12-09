"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataMahasiswaResponse;
var DataMataKuliahResponse;
DataMahasiswaResponse = {
    statusCode: 200,
    message: "success",
    data: [
        {
            name: "Firman",
            age: 25,
            semester: 7,
        },
        {
            name: "Farhan",
            age: 26,
            semester: 7,
        },
    ],
};
DataMataKuliahResponse = {
    statusCode: 200,
    message: "success",
    data: [
        {
            code: "PBO",
            name: "Pemograman Berbasis Objek",
            semester: 7,
            sks: 3,
        },
        {
            code: "DSA",
            name: "Data Structure and Algorithm",
            semester: 1,
            sks: 3,
        },
    ],
};
console.log(DataMahasiswaResponse);
console.log(DataMataKuliahResponse);
