// 1. Creating and using a class

// class Rectangle {
//     constructor(width, height, color) {
//          this.width = width;
//          this.height = height;
//          this.color = color; 
//     }
    
//     area() {
//         const area = this.width * this.height;
//           return area;
//     }
    
//     paint() {
//              console.log("The color is " + this.color);
//     }
    
//  }
 
// const rect = new Rectangle(2,3, "Red")
// const rect2 = new Rectangle(2,4, "blue")
// const area = rect.area();
// const area2 = rect2.area();
// rect.paint()
// rect2.paint()
// console.log(area)
// console.log(area2)
 
//2. Inheritence (from cohort -2 vid lec)

//3. Predefined classes 

const date = new Date();
console.log(date.getFullYear());

const map = new Map();
map.set('name','Dhruv');
map.set('Age','19');
console.log(map.get('name'))