// pengggunaan void di function
// tanpa return => void
const hello = (): void => {
  console.log("hello world");
};

const luasSegitiga = (a: number, b: number): void => {
  console.log(`luasnya adalah ${a * b} cm`);
};

// dengan return
const luasPersegi = (a: number, b: number): string => {
  return `luasnya adalah ${a * b} cm`;
};

const changeToString = (arr: number[]): string => {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

console.log(changeToString([1, 2, 3, 4, 5]));
