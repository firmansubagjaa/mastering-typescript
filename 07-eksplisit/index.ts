// implisit => ditentukan oleh typescript
let x = 10;
let arr = [1, 2, 3, 4, 5];
let arr2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let obj = {
  name: "Firman",
  age: 25,
};

let obj2 = [
  {
    name: "Firman",
    age: 25,
  },
  {
    name: "Akbar",
    age: 25,
  },
];

// explicit
let y: number = 10;
let arr3: number[] = [1, 2, 3, 4, 5];
let arr4: (string | number)[] = ["Firman", 23];
let arr5: (string | number)[][] = [
  ["Firman", 23],
  ["Akbar", 24],
];
let obj3: { name: string; age: number } = {
  name: "Firman",
  age: 25,
};
let obj4: { name: string; age: number }[] = [
  {
    name: "Firman",
    age: 25,
  },
  {
    name: "Akbar",
    age: 25,
  },
];
