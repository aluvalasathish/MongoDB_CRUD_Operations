const express = require('express');
const route = express.Router();
const Student = require('../models/student.js');
const {validateToken} = require('../middleware/adminAuth.js');
const { log } = require('console');

route.get('/',validateToken,async(req,res)=>{
    const allStudents = await Student.find({});
    if(!allStudents) res.status(401).send({message:"No students are ther"});
    else res.send(allStudents);
})
route.post('/addStudent',validateToken,async(req,res)=>{
    if(req.body==null){
        res.status(401).send({message:"Invalid Data"});
    }
    else
    {
        const student = new Student(req.body);
        student.save();
        res.send(student);
    }
})
route.put('/:id',validateToken,async(req,res)=>{
    const uStudent = req.body;
    console.log(uStudent);
    const student = await Student.findById(req.params.id);
    
    if(student!=null)
    {
        await Student.updateOne({_id:req.params.id},{$set:uStudent});
        res.send({message:"Details Updated"})
    }
    else{
        res.status(401).send({message:"No Stundets Are Present"});
    }
})
route.delete('/:id',validateToken, async(req,res)=>{
    
    const student = await Student.findById(req.params.id);
    if(student){
        await Student.deleteOne({_id:req.params.id});
        res.send({message:"Student Deleted"})
    }
    else{
        res.status(401).send({message:"No Stundets Are Present"});
    }
})
module.exports = route;
