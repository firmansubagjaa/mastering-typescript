// // optional property
// interface Person {
//   name: string;
//   age: number;
//   gender?: string;
//   isMarried?: boolean;
// }

// const person: Person = {
//   name: "Firman",
//   age: 25,
// };

// const greet = (person: Person, gender: string, isMarried: boolean): Person => {
//   return {
//     ...person,
//     gender,
//     isMarried,
//   };
// };

// console.log(greet(person, "Male", true));

// readonly property = opsi yang tidak bisa di ubah atau bisa dibilang read-only

// interface Person {
//   readonly name: string;
//   age: number;
//   gender?: string;
//   isMarried?: boolean;
//   readonly hobby: string[];
// }

// const person1: Person = {
//   name: "Firman",
//   age: 24,
//   gender: "Male",
//   isMarried: true,
//   hobby: ["Coding", "Gaming"],
// };

// person1.name = "Subagja";
// person1.age = 23;
// person1.hobby.push("Music");

// console.log(person1);

// index signature = opsi yang bisa di ubah atau bisa dibilang index signature
interface Person {
  [key: string]: string | number | boolean; // general
  name: string; // specific
  haveHobby: boolean; // specfic
}

const person: Person = {
  name: "Firman",
  age: 25,
  isMarried: true,
  haveHobby: false,
};
