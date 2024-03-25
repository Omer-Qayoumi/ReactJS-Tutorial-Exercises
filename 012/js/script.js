// const user = {
//   id: 1,
//   name: "omer",
//   age: "23",
//   showAge: function () {
//     console.log(this.age);
//   },
// };
// user.showAge();
// let showAgeFunction = user.showAge.bind(user);
// showAgeFunction();
//
let user1 = {
  id: 1,
  name: "omer",
  age: "23",
};
let user2 = {
  id: 2,
  name: "shilla",
  age: 21,
};
function showAge() {
  console.log("your age:", this.age);
}
let user1ShowAge = showAge.bind(user1);
let user2ShowAge = showAge.bind(user2);
user1ShowAge();
user2ShowAge();
