
//1. define number, string (try to avoid any) and "|" to get "or" 
// let x: number | string =1;
// x = "venu";
// let y: any =1;
// console.log(x,y);

// //2. basic example 
// function greet(firstName: any){
//     console.log("hello", firstName);
// }
// greet("harkirat");

// //3. inference of return type 
// function sum (a: number, b: number){
//     return a+b;
// }
// let ans = sum(1,2);
// console.log(ans);

// //4. function 
// function delayedCall(fn: ()=> void){
//     setTimeout(fn, 1000);
// }
// function lol(){
//     console.log("hi");
// }
// delayedCall(lol);

// //5. within a function 
// function hello(user:{
//     name: string,
//     age: number
// }){
//     console.log("hello" + user.name);
// }

// 6. Interfaces 
// const user = {
//     firstName: "dhruv",
//     lastName: "singh",
//     email: "dhruv@mail",
//     age: 20
// }
// interface User{
//     firstName: string;
//     lastName: string;
//     emial: string;
//     age: number;
// }

// function isLegal(user:User){
//     if(user.age>18){
//         return true;
//     } else{
//         return false;
//     }
// }

// 7. Types  (Types is same as interface)
// types have special properties - Union , Intersection

// Types and interface same => 
// interface User{
//   firstName: string;
//   lastName: string
// }

// type User = {
//     firstName: string;
//     lastName: string;
// }

// 7.1 Union 
type StringOrNumber = string | number;
function printId(id: StringOrNumber){
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
