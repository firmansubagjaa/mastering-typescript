let biodata: { name: string; age: number; isMarried: boolean } = {
  name: "Firman",
  age: 25,
  isMarried: false,
};

biodata = {
  name: "Firman",
  age: 25,
  //   isMarried: "no" => can't execute because it's boolean
  isMarried: false,
};

// array of object
const biodata2: { name: string; age: number; isMarried: boolean }[] = [
  {
    name: "Firman",
    age: 25,
    isMarried: false,
  },
  {
    name: "Farhan",
    age: 24,
    isMarried: true,
  },
];
