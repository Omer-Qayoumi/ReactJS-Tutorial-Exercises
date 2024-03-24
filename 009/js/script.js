// import { userName , number} from "./utils.js";
// console.log(userName , number);
//
// import * as Utils from "./utils.js";
// console.log(Utils);
//
// import * as Utils from "./utils.js";
// let { userName, number } = Utils;
// console.log(userName, number);
//
// import { userName as userFirstName, number } from "./utils.js";
// console.log(userFirstName, number);
//
import userFullName, { userName, number, double } from "./utils.js";
console.log(userName, number, double(10));
console.log(userFullName);
