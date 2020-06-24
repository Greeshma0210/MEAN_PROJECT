const express = require('express')
const router = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt=require("bcrypt")
const User = require('../models/User')
router.use(cors())

process.env.SECRET_KEY = 'secret'

router.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    Name:req.body.Name,
        Email: req.body.Email,
        Password: req.body.Password,
    Mobile_No: req.body.Mobile_No,
    Address_1: req.body.Address_1,
    Address_2: req.body.Address_2,
    city:req.body.city,
    state:req.body.state,
    code:req.body.code,
    country:req.body.country, 
    year: req.body.year,
    month: req.body.month,
    Skills:req.body.Skills,
    Resume:req.body.Resume ,
    Current_Employer_1:req.body.Current_Employer_1,
    Destination:req.body.Destination,
    Job_Description_1:req.body.Job_Description_1,
    Experience_In_Months_1:req.body.Experience_In_Months_1,
    Previous_Employer_2:req.body.Previous_Employer_2,
    Job_Description_2:req.body.Job_Description_2,
    Experience_In_Months_2:req.body.Experience_In_Months_2,
    College_University:req.body.College_University,
    Year_Passed_On:req.body.Year_Passed_On,
    Graduated:req.body.Graduated,
    Graduate_School:req.body.Graduate_School,
    Number_Of_Years_Attended:req.body.Number_Of_Years_Attended,
    Skills_Qualifications:req.body.Skills_Qualifications,
    Certification:req.body.Certification
  }

  User.findOne({
    Email: req.body.Email
  })
    
    .then(user => {
      if (!user) {
          bcrypt.hash(req.body.Password,10,(err,hash)=>{
              userData.Password=hash
              User.create(userData)
              .then(user=>{
                  res.json({status:user.Email+'Registered'})
              })
              .catch(err=>{
                  res.send('error:'+err)
              })
          })
        }else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.post('/login', (req, res) => {
  User.findOne({
    Email: req.body.Email
  })
    .then(user => {
      if (user) {
          if(bcrypt.compareSync(req.body.Password,user.Password)){
            const payload = {
                _id: user._id,
                Name:user.Name,
                Email:user.Email,
                Password:user.Password,
                

              }
          

        let token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.json({ token: token })
      } else {
        res.json({ error: "User does not exist" })
      }
    }else{
        res.json({error:"User does not exixt"})
    }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    _id: decoded._id
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send("User does not exist")
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = router

