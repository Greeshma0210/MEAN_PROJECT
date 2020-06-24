const mongoose=require('mongoose');

var Job=mongoose.model('Job',{
    jobId:{type:String},
    jobTitle:{type:String},
    postedDate:{type:String},
    role:{type:String},
    responsibility:{type:String},
    compName:{type:String},
    experience:{type:Number},
    salary:{type:String},
    noOfPositions:{type:Number},
    location:{type:String},
    skillsAndQualifications:{type:String},
    degree:{type:String},
    compInfo:{type:String},
    employmentType:{type:String},
    industryType:{type:String},
    searchKeyword:{type:String},
    jobDescription:{type:String}
});
module.exports={Job};