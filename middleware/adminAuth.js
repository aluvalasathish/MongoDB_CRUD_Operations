const jwt = require('jsonwebtoken');
const dotdev = require('dotenv').config();

function generateToken(admin)
{  console.log("token");

    const token = jwt.sign(admin,process.env.SECREATE_KEY);
    if(!token) return null;
    else return token;
}
function validateToken(req,res,next)
{
    console.log("Middle Ware");
    console.log(req.headers);
    
    
    const authToken = req.headers['authorization'].split('Bearer ')[1];
    if(authToken!=null)
    {
        try {
            console.log(authToken);
            
            const decoded = jwt.verify(authToken,process.env.SECREATE_KEY);
            console.log(decoded);
            
            next();
        } catch (error) {
            console.log(error.message);
        }
    }
    else res.status(403).send({message:"Token Not Found"});
}
module.exports = {generateToken,validateToken};