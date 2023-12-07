// implisit
// tanpa parameter
const hello = () => {
  console.log("hello world");
};

// dengan parameter
const hello2 = (name) => {
  console.log(`hello ${name}`);
};

// eksplisit
const luasPersegiPanjang = (a: number, b: number) => {
  return `luasnya adalah ${a * b} cm`;
};

console.log(luasPersegiPanjang(10, 20));
