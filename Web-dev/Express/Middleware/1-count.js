const express = require('express');

const app = express()

let count =1;

function Counter(req, res, next){
    count++;
}

app.use(Counter);

app.get("/", function(req, res){

})

app.put("/1", function(req, res){

})

app.listen(2000);