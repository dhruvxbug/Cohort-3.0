const express = require('express');             //imports 
const jwt = require('jsonwebtoken');

const app = express ();
const JWT_SECRET = "dhruvsinghispapa";                //JWT Token generated 

app.use(express.json());
const users =[];                               //created users to store values / will replace with database 

//SIGN UP
app.post("/signup", function (req,res){         // creates a new user and stores it ,prevents multiple sign-ups
    const username = req.body.username;           //input validation using Zod (later)
    const password = req.body.password;
   
    if(users.find(u => u.username === username)){          //checks is user is already resgistered 
       res.json({
           message:"You are already signed up"
       })
    }
    users.push({
       username: username,                         //pushing details in a variable 
       password: password
    })
    res.json({
       message: "You are signed up"                //sends confirmation for sign up 
    })

    console.log(users)
})

//SIGN IN 
app.post("/signin", function (req,res){         //Matchs username and password ,allots a token and stores it 
   const username = req.body.username;
   const password = req.body.password;
   let foundUser = null;
   for (let i=0; i<users.length; i++){                                                  // Finds the user with same username and password 
       if(users[i].username == username && users[i].password == password){
           foundUser = users[i];
       }
   }
   if (foundUser){
       const token = jwt.sign({
        username : username
       }, JWT_SECRET)                      // allots the user a token 
       res.send({
           token                     // displays the alloted token
       })
   }else {
       res.status(403).send({
           message: "No user found ,Invalid password"                    // User not found ,username doesn't match 
       })
   } 
   console.log(users)
})

//TOKEN >= Deliver Content 
app.get("/me", function(req,res){
  const token = req.headers.authorization;
  const decodedinfo = jwt.verify(token, JWT_SECRET);
  const username = decodedinfo.username;
  const user = users.find(user=> user.username === username);     //verify the token ===token 
  if (user){
   res.send({
       username: user.username,                           //if verified return username (details)
       password : user.password
   })
  }else{
     res.status(401).send({
       message:"Unauthorized"                      //if not verified 
     })
  }
})

app.listen(3003);