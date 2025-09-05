const express = require ('express')
const app =express()

let numberOfRequestForUser ={};
setInterval(()=>{
    numberOfRequestForUser={};
},1000)

app.use( function(req, res, next){
    const UserId= req.header["user-id"];
    if (numberOfRequestForUser[UserId]){
        numberOfRequestForUser[UserId] = numberOfRequestForUser +1; 
        if(numberOfRequestForUser>5){
            res.status(404).json({
                msg:"too many requests"
            })
        }
        else{
            next();
        }
    }
    else{
        numberOfRequestForUser[UserId]=1;
        next();
    }
})

app.get("/", function(req, res){

})

app.listen(3000);