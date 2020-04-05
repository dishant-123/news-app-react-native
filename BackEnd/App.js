//Db connection
require('dotenv/config');
const mongoose  = require('mongoose')
// import MongoDBUrl from './personal.config'
mongoose.connect(process.env.MongoDBUrl,({
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}))

let db = mongoose.connection;
db.once('open',()=>{
    console.log('Connected to db');
});

db.on('error',(err)=>{
    console.log('There was an error'+err);
})

//import modules
const express = require('express')
const router = express.Router()
const cors = require('cors');
const app  = express();
const bodyParser = require('body-parser');
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//middleware
app.use(bodyParser.json());
app.use(cors());



//making a schema for user database
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email  : {
        type : String,
        required : true,
        unique:true,
        trim : true,
        lowercase : true,
        validate(value){
            if ( !validator.isEmail(value)){
                throw new Error('Email is invalid !')
            }
        }
    },
    password : {
        type : String,
        required : true,
        minlength : 7,
        trim : true,
        validate(value) {
            if(value.toLowerCase().includes('password')){
                throw new Error('Password can\'t contain "password" ')
            }
        }
    },
})

const User =mongoose.model('news-app-react-native-user' , userSchema)


//handling http request

app.post('/checkAuth',async (req, res)=>{
    console.log(req.body)
    if(!req.body.email){
        return res.send({
            message : "error occur"
        })
    }
    else{
        const user  =await User.findOne({email : req.body.email});
        if(user){
            return res.status(200).json({
                user : req.body.email
            })
        }
        else{
            return res.status(400).json({
                message : "email and password not match"
            })
        }
    }
})
app.post('/signIn',async (req, res)=>{
    console.log('abc'+req.body)
    const detailsOfUser = await User.findOne({email:req.body.email});
    console.log(detailsOfUser)
    if(!detailsOfUser){
        return res.json({
            message:'No User with that email found'
        })
    }
    else{
         comparePassword = await bcrypt.compare(req.body.password, detailsOfUser.password);
         // console.log(comparePassword);
         if(comparePassword == false){
             return res.json({
                 message:'email and password do not match'
             })
         }
         else{
             const user = {
                 email : detailsOfUser.email
             }
             return res.json({
                 message:'Login Successfull',
                 user:user
             })
         }
    }
})

app.post('/signUp',async(req, res)=>{
    try {
    if(!req.body.userName || !req.body.password || !req.body.email){
        return res.status(400).json({
            message : 'All fields are required!'
        })
    }
    else{
        console.log(req.body)
        const password = await bcrypt.hash(req.body.password, 10)
        const new_user = new User({
            name : req.body.userName,
            email : req.body.email,
            password : password
        })
        const user = await User.create(new_user);
        if(user){
            return res.json({
                message : 'SuccessFully created your account!',
                user : {email : new_user.email}
            })
        }
        else{
            return res.json({
                message : 'Something went Wrong!'
            })
        }
    }
    }
    catch(err){
        // console.log(err)
        return res.json({
            message : "Email Already exists"
        })
    }
})

app.listen(3000,(res,error)=>{
    if(res){
        console.log('app is listening on PORT 3000')
    }
    if(error){
        console.log('error occured')
    }
});