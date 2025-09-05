const express = require ('express')
const app =express()

function AgeLimitMiddleware(req, res, next){
    const age = req.query.age;
    if (age>=14){
        next();
    }
    else{
        res.status(411).json({
            msg:"not old enough"
        })
    }
}

app.use(AgeLimitMiddleware);

app.get("/ride2", function(req,res){
        res.json({
            msg:"ride2 complete"
        })
})

app.get("/ride1", function(req,res){
        res.json({
            msg:"ride1 complete"
        })
})

app.use( function(err, req, res, next){
    res.status(404).send({})
    errorcount =errorcount+1; 
})

app.listen(3000);