import {z} from 'zod';
import express from "express";

const app = express();
app.use(express.json());

const userProfileSchema = z.object({
    name:z.string().min(1,{message:"Name cnnot be empty"}),
    email:z.string().email({message:"Invalid email format"}),
})

type UserProfile = z.infer<typeof userProfileSchema>;

app.put("/user",(req,res)=>{
    const result = userProfileSchema.safeParse(req.body);
    if(!result.success){
        return res.status(422).json({
            errors: result.error.flatten(), 
        })
    }
    const updateBody : UserProfile= result.data;

    res.json({
        message:"User Updated"
    })
})

app.listen(3000);