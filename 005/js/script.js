// let users = ["ali", "ahmad", "jawad", "fahim", "farzad"];
// console.log(...users);
// //
// let user1 = ["ali", "ahmad", "jawad", "fahim", "farzad"];
// let user2 = ["Erfan", "wais", "bahram"];
// console.log(...user1, ...user2);
//
// let user1 = ["ali", "ahmad", "jawad", "fahim", "farzad"];
// let user2 = ["Erfan", "wais", "bahram"];
// let allUsers = [...user1, ...user2];
// console.log(allUsers);
//
let user1 = ["ali", "ahmad", "jawad", "fahim", "farzad"];
let user2 = ["Erfan", "wais", "bahram"];
let allUsers = [...user1, ...user2];
function showUsers(...users) {
  console.log(...users);
}
showUsers(...user1);
