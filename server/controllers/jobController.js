const express=require('express');

var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;

var {Job}=require('../models/job');

router.get('/',(req,res)=>{
    Job.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('Error in Retriving jobs:'+JSON.stringify(err,undefined,2));}
    });
});


router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id:${req.params.id}`);

    Job.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in retriving jobs: '+JSON.stringify(err,undefined,2));}
    });
})


router.post('/',(req,res)=>{
    var j=new Job({
    
        jobId:req.body.jobId,
        jobTitle:req.body.jobTitle,
        postedDate:req.body.postedDate,
        role:req.body.role,
        responsibility:req.body.responsibility,
        compName:req.body.compName,
        experience:req.body.experience,
        salary:req.body.salary,
        noOfPositions:req.body.noOfPositions,
        location:req.body.location,
        skillsAndQualifications:req.body.skillsAndQualifications,
        degree:req.body.degree,
        compInfo:req.body.compInfo,
        employmentType:req.body.employmentType,
        industryType:req.body.industryType,
        searchKeyword:req.body.searchKeyword,
        jobDescription:req.body.jobDescription
    });
    j.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in job save:'+JSON.stringify(err,undefined,2));}
    });
});


router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

    var j={
        jobId:req.body.jobId,
        jobTitle:req.body.jobTitle,
        postedDate:req.body.postedDate,
        role:req.body.role,
        responsibility:req.body.responsibility,
        compName:req.body.compName,
        experience:req.body.experience,
        salary:req.body.salary,
        noOfPositions:req.body.noOfPositions,
        location:req.body.location,
        skillsAndQualifications:req.body.skillsAndQualifications,
        degree:req.body.degree,
        compInfo:req.body.compInfo,
        employmentType:req.body.employmentType,
        industryType:req.body.industryType,
        searchKeyword:req.body.searchKeyword,
        jobDescription:req.body.jobDescription
    };
    Job.findByIdAndUpdate(req.params.id,{$set:j},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in job update:'+JSON.stringify(err,undefined,2));}
    });
});


router.delete('/:id',(req,res)=>{
if(!ObjectId.isValid(req.params.id))
return res.status(400).send(`No record with given id: ${req.params.id}`);

Job.findByIdAndRemove(req.params.id,(err,doc)=>{
    if(!err){res.send(doc);}
    else{console.log('Error in job delete:'+JSON.stringify(err,undefined,2));}
});
});

module.exports=router;

