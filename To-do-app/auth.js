const jwt = require('jsonwebtoken')
const jwt_secret = "IamDhruv"

// authentication function 
function auth(req,res, next){ 
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message : "No Token Provided"});
    }
    const token = authHeader.split(" ")[1]; 
    const userDetails = jwt.verify(token, jwt_secret);

    if (userDetails){
        req.userId = userDetails.id
        next();
    }else {
        res.status(401).send({
             message: "UNAUTHORIZED"
        })
    }
    console.log(userDetails.userId)
}

//exporrt 
module.exports = {
    jwt, auth, jwt_secret
}