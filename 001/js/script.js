// hoisting
//----------------------------------------------- example 1
// var userAge = 21;
// console.log(userAge);
//
userAge = 21;
console.log(userAge);
var userAge;
//----------------------------------------------- example 2
// function showValue() {
//   console.log("This is test value");
// }
// showValue();
//
showValue();
function showValue() {
  console.log("This is test value");
}
//----------------------------------------------- example 3
// var myValue = function(){
//     console.log("This is my value")
// }
// myValue();
//
myValue();
var myValue = function () {
  console.log("This is my value");
};
