const express = require('express');
const jwt = require('jsonwebtoken');

const app =express();
const JWT_SECRET = "dhruvvvvvvvvvv";

app.use(express.json());
const users =[];

app.get("/", function(req, res) {
    res.sendFile("./public/index.html")
})

function logger(req, res, next){
    console.log(req.method+ "request came")
    next();
}
//SIGN UP 
app.post("/signup",logger, function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if (users.find(u => u.username == username)){
        res.json({
             message: "you are already signed up "
        })
    }
    users.push({
        username: username,
        password: password
    })
    res.json({
        message: "you are signed up "
    })
    console.log(users)
})

//SIGN IN 
app.post("/signin",logger, function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    let foundUser = null;
    for (let i=0; i<users.length; i++){
        if(users[i].username== username && users[i].password == password){
            foundUser = users[i];
        }
    }
    if(foundUser){
        const token =jwt.sign({username: username}, JWT_SECRET);
        res.send({token})
    } 
    else{
        res.status(403).send({
            message: "user not found ,incorrect password"
        })
    }
    console.log(users)
})

//Authentication 
function auth(req, res ,next){
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided" });
    }
    const token = authHeader.split(" ")[1]; // Extract actual token
    const userDetails = jwt.verify(token, JWT_SECRET);
   
  

    if (userDetails.username) {
        req.username = userDetails.username;
        next()
    } else {
        res.status(401).send({ message: "Unauthorized" });
    }
}
//Me endpoint 
app.get("/me",logger,auth, (req, res) => {
    const founduser = users.find(user => user.username === req.username);
    res.json({
        username: founduser.username
    })
});

app.listen(3000);
