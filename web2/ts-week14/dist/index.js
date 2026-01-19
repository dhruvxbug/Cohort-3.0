"use strict";
//1. define number, string (try to avoid any) and "|" to get "or" 
// let x: number | string =1;
// x = "venu";
// let y: any =1;
// console.log(x,y);
Object.defineProperty(exports, "__esModule", { value: true });
function printId(id) {
    console.log(`ID: ${id}`);
}
printId(101);
printId("202");
// type StringOrNumber = string | number;
// function printId(id: StringOrNumber) {
//   console.log(`ID: ${id}`);
// }
// printId(101); // ID: 101
// printId("202"); // ID: 202
// type Employee = {
//   name: string;
//   startDate: Date;
// };
// type Manager = {
//   name: string;
//   department: string;
// };
// type TeamLead = Employee & Manager;
// const teamLead: TeamLead = {
//   name: "harkirat",
//   startDate: new Date(),
//   department: "Software developer"
// };
//# sourceMappingURL=index.js.map