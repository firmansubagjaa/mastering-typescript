// const IDCheck = <T>(id: T) => {
//   console.log(id);
// };

// IDCheck<number | string>("test");
interface Mahasiswa {
  nama: string;
  umur: number;
  semester: number;
}

interface MataKuliah {
  kode: string;
  nama: string;
  semester: number;
  sks: number;
}

interface ResponseData<T extends object> {
  statusCode: number;
  message: string;
  data: T;
}

type TypeOfMahasiswaResponse = ResponseData<Mahasiswa[]>;
type TypeOfMataKuliahResponse = ResponseData<MataKuliah>;

const mahasiswaResponse: TypeOfMahasiswaResponse = {
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

const MatakuliahResponse: TypeOfMataKuliahResponse = {
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
