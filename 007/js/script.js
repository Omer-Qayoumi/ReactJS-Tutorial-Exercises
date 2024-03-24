// let user = {
//   id: 1,
//   name: "omer",
//   family: "qayoumi",
//   age: 23,
// };
// let id = user.id;
// let name = user.name;
// let family = user.family;
// let age = user.age;
// console.log(id, name, family, age);
//
//
// let user = {
//   id: 1,
//   name: "omer",
//   family: "qayoumi",
//   age: 23,
// };
// let { id, name, family, age } = user;
// console.log(id, name, family, age);
//
//
let user = {
  id: 1,
  name: "omer",
  family: "qayoumi",
  age: 23,
};
let { id, name: userName, family, age } = user;
console.log(id, userName, family, age);
