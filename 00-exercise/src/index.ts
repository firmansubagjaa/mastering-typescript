const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: (string | number)[] = ["1", 2, 3, 4, 5];
const arr3: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const arr4: (string | number | boolean)[][] = [
  ["1", 2, true],
  [3, 4, false],
  [5, 6, true],
];

const obj1: { name: string; age: number } = {
  name: "Firman",
  age: 25,
};

const obj2: { name: string; age: number }[] = [
  {
    name: "Firman",
    age: 25,
  },
  {
    name: "Akbar",
    age: 25,
  },
];

const obj3: {
  name: string;
  age: number;
  isMarried: boolean;
  address: { city: string; country: string };
} = {
  name: "Firman",
  age: 25,
  isMarried: false,
  address: {
    city: "Jakarta",
    country: "Indonesia",
  },
};

const luasSegitiga = (a: number, t: number): string => {
  return `Luas segitiga dengan alas ${a} dan tinggi ${t} adalah ${
    0.5 * a * t
  } cm`;
};

type BiodataMahasiswa = {
  status: string;
  statusCode: number;
  message: string;
  data: { name: string; age: number }[];
};

const result = (): BiodataMahasiswa => {
  return {
    status: "ok",
    statusCode: 200,
    message: "success",
    data: [
      {
        name: "Firman",
        age: 25,
      },
      {
        name: "Akbar",
        age: 25,
      },
    ],
  };
};

let biodataMahasiswa: BiodataMahasiswa;

biodataMahasiswa = {
  status: "ok",
  statusCode: 200,
  message: "success",
  data: [
    {
      name: "Firman",
      age: 25,
    },
    {
      name: "Akbar",
      age: 25,
    },
  ],
};

// console.log(result());
