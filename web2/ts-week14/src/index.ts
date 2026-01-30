
//1. define number, string (try to avoid any) and "|" to get "or" 
let x: number | string =1;
x = "venu";
let y: any =1;
console.log(x,y);

// //2. basic example 
function greet(firstName: any){
    console.log("hello", firstName);
}
greet("harkirat");

// //3. inference of return type 
function sum (a: number, b: number){
    return a+b;
}
let ans = sum(1,2);
console.log(ans);

// //4. function 
function delayedCall(fn: ()=> void){
    setTimeout(fn, 1000);
}
function lol(){
    console.log("hi");
}
delayedCall(lol);

// //5. within a function 
function hello(user:{
    name: string,
    age: number
}){
    console.log("hello" + user.name);
}

// 6. Interfaces 
const user = {
    firstName: "dhruv",
    lastName: "singh",
    email: "dhruv@mail",
    age: 20
}
interface User{
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}

function isLegal(user:User){
    if(user.age>18){
        return true;
    } else{
        return false;
    }
}

// 7. Types  (Types is same as interface)
// types have special properties - Union , Intersection

// Types and interface same => 
interface User{
  firstName: string;
  lastName: string
}

type User = {
    firstName: string;
    lastName: string;
}

// 7.1 Union 
type StringOrNumber = string | number;
function printId(id: StringOrNumber){
    console.log(`ID: ${id}`);
}
printId(101);
printId("202");


// // 7.2 Intersection 
type Employee = {
    name: string;
    startDate: Date;
};
type Manager = {
    name: string;
    department: string;
}

type TeamLead = Employee & Manager;
const teamLead: TeamLead = {
    name: "dhruv",
    startDate: new Date(),
    department: "Engineer"
};

// 8. Arrays in TS 

// example - 1
const arr1: number[]= [1,2,3];
function maxValue(arr:number[]){
    let max: number | undefined = 0;
    if( arr.length ===0) return undefined;
    for(let i=1; i<arr.length; i++){
      if(arr[i] > max){
        max = arr[i];
      }
      return max;
    }
}
console.log(maxValue(arr1));


interface User{
    firstName: string;
    lastName: string;
    age: number;
}

function filterUser(users: User[]){
    return users.filter(x => x.age >=18);
}

console.log(filterUser([{
    firstName: "dhruv",
    lastName: "singh",
    age: 21 },{
    firstName: "DDD",
    lastName: "singh",
    age: 19
    }
]))

// 9. Enums 
//normal 
enum Direction {
    Up, // defaults to 0 
    Down,  // 1
    Left,  // 2
    Right // 3
}
function doSomething(keyPressed: Direction){
    // do
}

doSomething(Direction.Up);
console.log(Direction.Up);

// Up =1 (number), can also be a number or string 

// 10. Generics 
function getFirstElement(arr: (string| number)[]){
    return arr[0];
}
const el= getFirstElement(["dhruv"]);
// now the thing we return from the function can be string or a number 
// we have no clear type for it to perform action on it 

// solution - is using generics 
// generics are not a real type it uses a placeholder that gets filled in later 
function identity<T>(arg: T):T{
    return arg;
}
let output1 = identity<string>("mystring");
let output2 = identity<number>(1000);

function getFirstElement<T>(arr:T[]){
    return arr[0];
}
const el1 = getFirstElement<number>([1,2]);
const el = getFirstElement<string>(["dhruv"]);
console.log(el.toLowerCase());

// 11. Exporting and importing Modules 

// 11.1 Constant exports 
// math.ts 
export function add(x:number, y:number):number{
    return x+y;
}
// main.ts 
import { add } from "./math"
add(1, 2)

// 11.2 default exports 
export default class Calculator{
    add(x:number, y:number):number{
        return x+y;
    }
}

import Calculator from "./Calculator";
const calc = new Calculator();
console.log(calc.add(10,5));

// 12. Pick 
// we can create a new type by selecting a few props of the original type 
interface User{
    id: number;
    name: string;
    email: string;
    createAt: Date;
}

type UserProfile = Pick<User, 'name'|'email'>

const displayUserProfile = (user: UserProfile) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
};

// 13. Partial 
// we are not sure about all the fields but want to keep all out options open 
// so we create a new type using partial 
interface PizzaOrder{
    size: string;
    crust: string;
    toppings: string[];
}

type JustPizzaOrder = Partial<PizzaOrder>;

const draft1: JustPizzaOrder= {
    size: 'large'
    //maybe 
    //maybe
};

const draft2: JustPizzaOrder ={
    // empty is OK!
};

// 14. Readonly 
// not to be edited after initialization 

interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
};

const config: Readonly<Config> ={
    endpoint: "localhost/8080",
    apiKey: 'old',
};

// 15. Record 
interface User{
    id: string;
    name: string;
}

type users = {[key: string]: User};
// or we can use Record to define this string 
// like this - 
type users = Record<string,User>;

const users: Users = {
    'xyz1': {id: 'xyz1', name: 'Dhruv'},
    'xyz2': {id: 'xyz2', name: 'Singh'},
}

// 15.1 Map 
// another way of dealing with objects 
interface User{
    id: string;
    name: string;
}

const usersMap = new Map<string,User>();
// we are using .set with the Map const
//instead of the Record method where we create a type and then a const 
usersMap.set('xyz1',{id:'xyz1',name:'Dhruv'});
usersMap.set('xyz2',{id:'xyz2',name:'Dhruv'});

console.log(usersMap.get('xyz1'));

// 16. Exclude 
// we accept multiple types but what to exclude 1 particular type 
type Event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event, 'scroll'>;

const handleEvent = (event: ExcludeEvent) =>{
    console.log(`Handling event: ${event}`);
};

handleEvent('click');