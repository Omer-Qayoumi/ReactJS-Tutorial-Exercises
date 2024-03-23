// Arrow functions
// function showValue() {
//   console.log("Arrow functions");
// }
// showValue();
//
// let showValue = function () {
//   console.log("Arrow functions");
// };
// showValue();
//
// Arrow function
// let showValue = () => {
//   console.log("Arrow functions")
// };
// showValue();
//
// let sum = (nam1, nam2) => {
//   return nam1 + nam2;
// };
// console.log("sum: ", sum(9, 21));
//
// let sum = (nam1, nam2) => nam1 + nam2;
// console.log("sum:", sum(9, 21));
//
// let doubleNumber = (nam) => nam * 2;
// console.log("double: ", doubleNumber(10));
//
// let doubleNumber = nam => nam * 2;
// console.log("double: ", doubleNumber(10));
//
// let makeUser = (id, name) => ({ id: id, name: name });
// console.log("user:", makeUser(12, "Amir"));
//
// let users = [
//   { id: 1, name: "ali", age: 21 },
//   { id: 2, name: "ahmad", age: 30 },
//   { id: 3, name: "mirza", age: 33 },
//   { id: 4, name: "wali", age: 13 },
//   { id: 5, name: "hamed", age: 41 },
// ];
// users.forEach((user) => console.log(user));
//
let users = [
  { id: 1, name: "ali", age: 21 },
  { id: 2, name: "ahmad", age: 30 },
  { id: 3, name: "mirza", age: 33 },
  { id: 4, name: "wali", age: 13 },
  { id: 5, name: "hamed", age: 41 },
];
let mainUserItem = users.find((user) => user.name === "wali");
console.log(mainUserItem);
