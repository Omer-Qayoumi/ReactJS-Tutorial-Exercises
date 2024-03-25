// let scores = [1, 2, 3, 4, 5, 6];
// scores.map(function () {
//   console.log("item");
// });
//
// let scores = [1, 2, 3, 4, 5, 6];
// scores.map(function (score) {
//   console.log("item", score);
// });
//
// let scores = [1, 2, 3, 4, 5, 6];
// let mapResult = scores.map(function (score) {
//   return score * 2;
// });
// console.log(mapResult);
//
let scores = [1, 2, 3, 4, 5, 6];
let mapResult = scores.map((score, index) => {
  console.log(index, score);
  return score * 2;
});
console.log(index, mapResult);
