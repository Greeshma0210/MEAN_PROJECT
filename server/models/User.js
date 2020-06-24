
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new Schema({
  Name: { type: String },
      Email: { type: String ,
      required:true},
      Password: {type: String,
      required:true },
      Mobile_No: { type: Number },
      Address_1: {type: String },
      Address_2: {type: String },
      city:{type: String },
      state:{type: String },
      code:{type: String },
      country:{type: String }, 
      year: {type: Number },
      month: {type: Number },
      Skills:{type: String },
      Resume:{type: String },
      Current_Employer_1:{type:String},
      Destination:{type:String},
      Job_Description_1:{type:String},
      Experience_In_Months_1:{type:Number},
      Previous_Employer_2:{type:String},
      Job_Description_2:{type:String},
      Experience_In_Months_2:{type:Number},  
      College_University:{type:String},
      Year_Passed_On:{type:String},
      Graduated:{type:String},
      Graduate_School:{type:String},
      Number_Of_Years_Attended:{type:Number},
      Skills_Qualifications:{type:String},
      Certification:{type:String}
  


})

module.exports = User = mongoose.model('users', UserSchema)

