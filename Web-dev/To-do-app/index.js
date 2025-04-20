const express = require('express')
const {UserModel, TodoModel} = require("./db");
const { default: mongoose } = require('mongoose');
const {jwt, auth, jwt_secret} = require("./auth")

const app = express();
app.use(express.json());

mongoose.connect("mongoose_url")


//To sign Up and register in the database 
app.post("/signup",async function(req, res){
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;


      await UserModel.create({
        name: name,
        email: email,
        password: password
      })

      res.json({
        message: "you are signed up"

      })
});

// Genereate a JWT Token 
app.post("/signin", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email : email,
        password: password
    })

    if (user){
        const token = jwt.sign({ id: user._id}, jwt_secret);
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
