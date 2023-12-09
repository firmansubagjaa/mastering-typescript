// const IDCheck = <T>(id: T) => {
//   console.log(id);
// };
var mahasiswaResponse = {
    statusCode: 200,
    message: "Success",
    data: [
        {
            nama: "Firman",
            umur: 25,
            semester: 7,
        },
    ],
};
var MatakuliahResponse = {
    statusCode: 200,
    message: "Success",
    data: {
        kode: "PBO",
        nama: "Pemograman Berbasis Objek",
        semester: 7,
        sks: 3,
    },
};
// interface MahasiswaResponse {
//   statusCode: number;
//   message: string;
//   data: DataMahasiswaResponse;
// }
// interface MatakuliahResponse {
//   statusCode: number;
//   message: string;
//   data: MataKuliah;
// }
