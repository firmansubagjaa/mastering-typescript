// type Account = {
//   username: string;
//   password: string;
// };
var account1 = {
    username: "user",
    password: "user123",
    description: "this is user account",
    historyOrder: ["apple", "banana", "mango"],
    role: "user",
    login_At: new Date(),
};
var account2 = {
    username: "admin",
    password: "admin123",
    allowAccessEverything: true,
    role: "admin",
    login_At: new Date(),
};
console.log(account1);
console.log(account2);
