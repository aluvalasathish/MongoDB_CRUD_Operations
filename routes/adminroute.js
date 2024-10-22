const express = require('express');
const route = express.Router();
const Admin = require('../models/admin.js');
const authMiddleWare = require('../middleware/adminAuth.js');

route.post('/',async(req,res)=>{
    console.log("admin");
    
    const {mail,pass} = req.body;
    const admin = await Admin.findOne({email:mail,password:pass});
    console.log(admin.email);
    
    if(admin!=null){
        const token = authMiddleWare.generateToken(admin.email);
        return res.send({token:token});
    }
    else{
        res.status(401).send({message:"No Admin Found"});
    }
})
module.exports = route;