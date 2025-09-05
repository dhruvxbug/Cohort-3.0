//FETCH 

function main(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(async Response =>{
        const json =  Response.json();
        console.log(json.todos.length);
    });
}

async function main(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const json = await response.json();
        console.log(json);
}

main();

//AXIOS 

const axios =require("axios");  

//get 
async function main(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data);
}

//post 
async function main(){
    const response = await axios.post("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data);
}

//delete 
async function main(){
    const response = await axios.delete("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data);
}

main();

//POST 
// change request method ,send body , send header 
// way to change the data maeans POST 

async function main(){
    const response = await axios({

        username:"drhuv",
        password:"2342332",
    },
   {
    url : "https://httpdump.app/dumps/b652c90b-68b5-4266-b4cc-10c255e9d4c4?a=b",
    method: "POST",
    headers:{
        Authorization:"Dhruv 1234",
    },
   });
   console.log(response.data)
}

main();