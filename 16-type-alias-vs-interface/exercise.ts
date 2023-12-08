// type Account = {
//   username: string;
//   password: string;
// };

// type User = {
//   historyOrder: string[];
//   role: string;
// };

// type Admin = {
//   allowAccess: boolean;
//   role: string;
// };

// let account1: Account & User = {
//   username: "user",
//   password: "user123",
//   historyOrder: ["apple", "banana", "mango"],
//   role: "user",
// };

// let account2: Account & Admin = {
//   username: "admin",
//   password: "admin123",
//   allowAccess: true,
//   role: "admin",
// };

// console.log({ account1, account2 });

interface Account {
  username: string;
  password: string;
  role: "user" | "admin";
  login_At: Date;
}

interface User extends Account {
  description: string;
  historyOrder: (string | number)[];
}

interface Admin extends Account {
  allowAccessEverything: boolean;
}

const account1: User = {
  username: "user",
  password: "user123",
  description: "this is user account",
  historyOrder: ["apple", "banana", "mango"],
  role: "user",
  login_At: new Date(),
};

const account2: Admin = {
  username: "admin",
  password: "admin123",
  allowAccessEverything: true,
  role: "admin",
  login_At: new Date(),
};

console.log(account1);
console.log(account2);
