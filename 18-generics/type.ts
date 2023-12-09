export interface Mahasiswa {
  nama: string;
  age: number;
  semester: number;
}

export interface MataKuliah {
  kode: string;
  nama: string;
  semester: number;
  sks: number;
}

export interface ResponseData<T> {
  statusCode: number;
  message: string;
  data: T;
}
