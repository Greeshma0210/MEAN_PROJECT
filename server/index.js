const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const multer=require('multer');

const {mongoose}=require('./db.js');

var jobController=require('./controllers/jobController.js');
var userController=require('./controllers/User.js');

var app=express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));

app.listen(3000,
    ()=>console.log('Server started at port:3000'));

     app.use(bodyParser.urlencoded({extended:false}))



app.use('/jobs',jobController);
app.use('/users',userController);



const storage=multer.diskStorage({
    destination:(req,file,callBack)=>{
        callBack(null,'uploads')
    },
    filename:(req,file,callBack)=>{
        callBack(null,`${file.originalname}`)
    }
})

const upload = multer({ storage: storage })
app.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file;
    console.log(file.filename);
    if (!file) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file);
  })