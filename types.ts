enum Gender {
  MALE = "male",
  FEMALE = "female",
}

interface MataKuliah {
  kode: string;
  nama: string;
  semester: number;
  sks: number;
}

interface Mahasiswa {
  nama: string;
  nim: number;
  umur: number;
  jenisKelamin: Gender;
  semester: number;
  mataKuliah: MataKuliah[];
}

interface ResponseData<T extends object> {
  statusCode: number;
  message: string;
  data: T;
}

export { ResponseData, Mahasiswa, Gender, MataKuliah };
