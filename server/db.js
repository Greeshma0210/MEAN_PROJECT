const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/crud',{ useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false } ,(err)=>{
    if(!err)
    console.log('MongoDb connection succeeded.');
    else
    console.log('Error in Db connection:'+JSON.stringify(err,undefined,2));
});

module.exports=mongoose;