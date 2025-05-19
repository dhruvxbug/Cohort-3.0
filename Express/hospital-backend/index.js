const express = require("express");
const app = express();

const users =[{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

// reads the data from the user
app.get("/", function(req, res){

    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })
})

app.use(express.json());

// adds a new kidney 
app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

//converts unhealthy kidney to healthy kidney 
app.put("/", function(req, res){
    if (isThereAtleastOneUnhealthyKidney()){
        for (let i=0; i<users[0].kidneys.length; i++){
            users[0].kidneys[i].healthy = true;
        }
        res.json({});
    }
    else{
        res.status(411).json({
            msg: "you have no bad kidneys to convert"
        })
    }
})

// removing all the unhealthy kidneys 
app.delete("/", function(req, res){
    // only run if there are unhealthy kidneys present 
    if (isThereAtleastOneUnhealthyKidney()){
        const newKidneys =[];
        for (let i=0; i<users[0].kidneys.length; i++){
            if (users[0].kidneys[i].healthy){
                 newKidneys.push({
                    healthy: true
                 })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg:"done"})
    }
    else{
        res.status(411).json({
            msg: "you have no bad kidneys"
        });
    }
    
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if (!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}

app.listen(3000);