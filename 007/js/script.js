// let array = ["omer", "ahmad", "waris", "omid", "wali"];
// let item1 = array[0];
// let item2 = array[1];
// let item3 = array[2];
// console.log(item1, item2, item3);
//
// let array = ["omer", "ahmad", "waris", "omid", "wali"];
// let [item1, item2, item3] = array;
// console.log(item1, item2, item3);
//
// let array = ["omer", "ahmad", "waris", "omid", "wali", "jamshid", "maral"];
// let [item1, item2, item3, ...otherItems] = array;
// console.log(item1, item2, item3, ...otherItems);
//
// let array = ["omer", "ahmad", "waris", "omid", "wali", "jamshid", "maral"];
// let [item1, item2, , item3, item4] = array;
// console.log(item1, item2, item3, item4);
//
// let [a, b] = [10, 20];
// console.log(a, b);
//
// let [a, b] = [10];
// console.log(a, b);
//
// let [a, b = 50] = [10];
// console.log(a, b);
//
// let [a = 300, b = 50] = [10];
// console.log(a, b);
//
const makeNumbers = () => {
  return [30, 10];
};
let [a, b] = makeNumbers();
console.log(a, b);
