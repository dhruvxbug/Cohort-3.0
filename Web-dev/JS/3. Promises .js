// 1. Creating and using a class

class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    
    area() {
        const area = this.width * this.height;
          return area;
    }
    
    paint() {
             console.log("The color is " + this.color);
    }
    
 }
 
const rect = new Rectangle(2,3, "Red")
const rect2 = new Rectangle(2,4, "blue")
const area = rect.area();
const area2 = rect2.area();
rect.paint()
rect2.paint()
console.log(area)
console.log(area2)
 
//2. Inheritence (from cohort -2 vid lec)

//3. Predefined classes (Js provided classes)

const date = new Date();
console.log(date.getFullYear());

const map = new Map();
map.set('name','Dhruv');
map.set('Age','19');
console.log(map.get('name'))

//4.  Promises ( a cleaner way of callbacks )

 function setTimeoutPromisified(ms){
    return new Promise(resolve=> setTimeout(resolve,3000));
 }

 function callback(){
    console.log("3 seconds complete");
}

setTimeoutPromisified(3000).then(callback)

//5. Why we use promises example (normal method issue)

function step1 (){
    console.log("Hi");
    setTimeout(step2, 3000);
}
function step2(){
    console.log("Hello");
    setTimeout(step3, 5000); 
}
function step3 (){
    console.log("how are you");
}
setTimeout(step1, 1000);

// promisified version for the same with callback hell  

function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    setTimeoutPromisified(3000).then(function () {
      console.log("hello");
      setTimeoutPromisified(5000).then(function () {
        console.log("hello there");
      });
    });
  });

// without callback hell

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
   
setTimeoutPromisified(1000)
  .then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hello there");
  });  

// 6. Async await synctax 

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function solve() {
      await setTimeoutPromisified(1000);
      console.log("hi");
      await setTimeoutPromisified(3000);
      console.log("hello");
      await setTimeoutPromisified(5000);
      console.log("hi there");
  }
  
  solve();

// 7. Promisified version of fs.readfile  

const fs = require("fs");

function readTheFile(sendTheFileValueHere){  

    fs.readFile ("a.txt","utf-8", function(err,data){
        sendTheFileValueHere(data);
    })
}

function readFile(fileName){
    return new Promise(readTheFile);
}

const p= readFile();

function callback(contents){
    console.log(contents);
}
p.then(callback)


// Learn promises again ,and also look at the content further and also the vid form half part again 