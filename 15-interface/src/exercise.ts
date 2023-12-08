interface Kuliah {
  name: string;
  age: number;
}

interface Mahasiswa extends Kuliah {
  major: string;
  courses: {
    nameDosen: string;
    course: string;
    score: number;
  }[];
}

interface Dosen extends Kuliah {
  isMarried: boolean;
  major: string;
  courses: string[];
}

const mhs1: Mahasiswa = {
  name: "Firman",
  age: 24,
  major: "Sistem Informasi",
  courses: [
    {
      nameDosen: "Mr.Edward",
      course: "Algoritma",
      score: 100,
    },
    {
      nameDosen: "Mr. Stefanny",
      course: "Kalkulus",
      score: 80,
    },
  ],
};

const dosen1: Dosen = {
  name: "Mr. Edward",
  age: 32,
  isMarried: false,
  major: "Sistem Informasi",
  courses: ["Algoritma", "Kalkulus"],
};

console.log(mhs1);
console.log(dosen1);
