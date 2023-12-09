export interface Mahasiswa {
  name: string;
  age: number;
  semester: number;
}

export interface MataKuliah {
  name: string;
  code: string;
  semester: number;
  sks: number;
}

export interface ResponseData<T> {
  statusCode: number;
  message: string;
  data: T;
}
