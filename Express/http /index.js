const express = require('express');

const app = express()

function loggermiddleware(req , res,next){
    console.log("Method is "+ req.method);
    console.log("Route is "+req.url);
    console.log("Host is "+req.hostname);
    console.log(new Date());
    next();
}

app.use(loggermiddleware);

app.get("/add", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
   res.json({
    msg: a + b
   })
})

app.get("/divide", function (req,res){
    const a = req.query.a;
    const b = req.query.b;
    res.json({
     msg: a / b
    })
})

app.get("/multiply", function (req,res){
    const a = req.query.a;
    const b = req.query.b;
    res.json({
     msg: a * b
    })
})

app.get("/substract", function (req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
   res.json({
    msg: a - b
   })
})

app.listen(3000);