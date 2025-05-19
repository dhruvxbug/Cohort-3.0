// 1. let any int and datatype work (parse) -function

//typescript 
//parse it to a number
function sum(a,b) {
    return  parseInt(a) + parseInt(b);
}
 
let ans = sum("20",30)
console.log(ans); 

// 2.  simple function 

function sum(n){
    let ans=0;
    for(let i=1; i<n; i++){
        ans=ans + i
    }
    return ans;
}

const ans=sum(10);
console.log(ans);

// 3. import file 

const fs = require("fs");

const contents = fs.readFile("a.txt");
console.log(contents);

// 4. Functional Arguments 

function sum(a,b){
  return a + b;   
}

function subtract (a,b){
    return a -b;
}

function num (a,b, ab){
    let val = ab (a,b);
    return val;
} 

let ans= num(1,2,sum);
console.log(ans);

// 5.  Async function example 

const fs = require("fs");

function print (err, data){
    if (err){
        console.log(" File not found ");
    }
    else{
        console.log(data);
    }
}
fs.readFile ("a.txt", "utf-8", print);
console.log("done!");

// 6. Set time out function  (global function ,already hota hai) 
// it sets the function to work after the time out period but all the other things work while the timer is working 

function timeout() {
     console.log("1st statement");
}

console.log("2nd statement");

setTimeout(timeout, 1000);
console.log("3rd statement");

//  inserting an expensive operation in between to make sure we can play with the timer and understand it better

let c= 1;
for (let i = 0; i< 100000; i++){
    c = c+ 1;
}
console.log("the operation is complete");

// first it will complete the expensive operation and then it will execute the timeout function 
// because the thread wasn't free as it was bus on the expensive operation as it uses only 1 thread 