function solve(arr){
    
    console.log(arr.filter(user=> user.age>18 && user .gender=="male"))
    
} 


const user= [{
    name:"dhruv",
    age:19,
    gender:"male"
},
{
  name:"priya",
    age:19,
    gender:"female"
},
{
   name:"naman",
    age:21,
    gender:"male"
}]
solve(user);