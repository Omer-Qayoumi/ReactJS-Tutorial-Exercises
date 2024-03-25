// function clickHandler(number){
//   console.log("click", number)
// }
//
// function clickHandler(number) {
//   number.style.background = "red";
//   console.log("click", number);
// }
//
// function showWindow() {
//   console.log(this);
// }
// showWindow();
//
// let newUser = {
//   id: 1,
//   name: "omer",
//   lastname: "qayoumi",
//   age: 21,
//   function() {
//     console.log(this);
//   },
// };
// console.log(newUser);
//
// let newUser = {
//   id: 1,
//   name: "omer",
//   lastname: "qayoumi",
//   age: 21,
//   show: function () {
//     console.log(this);
//   },
// };
// newUser.show();
//
// let newUser = {
//   id: 1,
//   name: "omer",
//   lastname: "qayoumi",
//   age: 21,
//   show: function () {
//     console.log(this);
//   },
// };
// console.log(newUser.lastname);
//
let newUser = {
  id: 1,
  name: "omer",
  lastname: "qayoumi",
  age: 21,
  show: function () {
    console.log(this);
  },
};
console.log(newUser.lastname);
