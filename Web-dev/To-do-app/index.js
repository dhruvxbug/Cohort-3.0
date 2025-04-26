//import (require) library
const express = require('express');
const bcrypt = require("bcrypt");
const {z} = require("zod");

//import from other files 
const {UserModel, TodoModel} = require("./db");
const { default: mongoose } = require('mongoose');
const {jwt, auth, jwt_secret} = require("./auth");

//use of express 
const app = express();
app.use(express.json());

//connection to mongoDB
mongoose.connect("");

//To sign Up and register in the database 
app.post("/signup",async function(req, res){
    const requiredbody = z.object({
        email : z.string().min(3).max(30).email(),
        password: z.string().min(6).max(50).regex("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"),
        name: z.string().min(3).max(50)
    })

    const parsedData = requiredbody.safeParse(req.body);

    if(!parsedData.success){
        res.json({
            message: "Invalid format",
            error: parsedData.error
        })
        return
    }

    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    let error1 = false;
   try{ 
    const hashedPassword = await bcrypt.hash (password, 5);
    console.log(hashedPassword)
     
      await UserModel.create({
        name: name,
        email: email,
        password: hashedPassword,
      })
   }catch(e){
       res.json({
        message:" Cannot register with the same email id"
       })
       error1 = true;
   }
      if (!error1){
        res.json({
            message: "you are signed up"
    
          })
      }
});

// Veryify (compare) hashed password to Genereate a JWT Token 
app.post("/signin", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email : email
    });

    if (!response){
        res.status(403).json({
            message: "User does not exist in Our Database"
        });
        return;
    }

    const Matchpassword = await bcrypt.compare (password , response.password);

    if (Matchpassword){
        const token = jwt.sign({ id: response._id}, jwt_secret);
        res.json({
            token: token  
        })
    } else {
        res.status(403).json({
            message: "UNAUTHROIZED"
        })
    }
});

// After the Auth middleware => creating a to-do 
app.post("/todo",auth, async function(req,res){
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;
     
    await TodoModel.create({
         title,
        done, 
        userId
    })
    res.json({
        message:"Todo Created"
    })
});

// to view the todos that have been saved in the database 
app.get("/todos",auth,async function(req,res){
    const userId = req.userId;

    const todos = await TodoModel.find({
       userId
    });
    res.json({
        todos
    })
});

app.listen(3000);
