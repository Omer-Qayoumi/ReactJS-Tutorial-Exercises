// reset operators
// function sum(a, b, c) {
//   console.log(a + b + c);
// }
// sum(10, 20, 50);
//
// let sum = function (a, b, c) {
//   console.log(a + b + c);
// };
// sum(10, 20, 50);
// let sum = function (a, b, c) {
//   console.log(arguments[0] + arguments[1] + arguments[2]);
// };
// sum(10, 20, 50);
//
// let sum = function (...numbers) {
//   console.log(arguments[0] + arguments[1] + arguments[2]);
// };
// sum(10, 20, 50);
//
// let sum = (...numbers) => {
//   console.log(numbers);
// };
// sum(10, 20, 50);
//
// let sum = (a, b, c, ...numbers) => {
//   console.log(a, b, c);
//   console.log(numbers);
// };
// sum(10, 20, 50, 23, 44, 56, 67, 23, 65, 23);
//
let sum = (...numbers) => {
  console.log(numbers);
};
sum(10, 20, 50, 23, 44, 56, 67, 23, 65, 23);
