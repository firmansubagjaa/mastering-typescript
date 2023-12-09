interface Person {
  readonly name: string;
  age: number;
  gender: string;
  place: {
    city: string;
    province: string;
  }[];
}

interface Biodata extends Person {
  isMarried: boolean;
  hobby: string[];
}

const person: Biodata = {
  name: "Firman",
  age: 25,
  gender: "L",
  isMarried: true,
  hobby: ["Algoritma Pemrograman", "Basis Data", "Kalkulus"],
  place: [
    {
      city: "Cirebon",
      province: "Jawa Barat",
    },
  ],
};
