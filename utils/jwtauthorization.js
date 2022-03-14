const jwt = require('jsonwebtoken');
require('dotenv').config();

// middleware just verifies and checks the token
module.exports = function (req,res,next){
    const token = req.headers?.authorization?.split(" ").pop();
    if(!token){
        return res.status(403).json({msg:"invalid token!"})
    }
    jwt.verify(token, process.env.JWT_SECRET, (err,data)=>{
        if(err){
            return res.status(403).json({msg:"invalid token!"})
        }
        req.user=data.id
        console.log(req.user, "plzzzzzzzzzzzzz")
        next()
    })
}