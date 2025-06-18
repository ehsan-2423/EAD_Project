const express=require("express")
const mongoose= require('mongoose');
const app = express();
const cors= require('cors');
const User= require('./models/User')
const port = 3001;

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://ehsan:12345@cluster0.mb4qclh.mongodb.net/EAD_Project')
.then(() =>console.log('Database connected'))
.catch((err) =>console.log('Not db connected',err))



app.post('/register', (req,res)=>{
    User.create(req.body)
    .then((users)=>res.json(users))
    .catch((err)=>{
        console.log('Hello Error on /register: ',err)
        res.status(500).json({message: 'Error on /register: '})
    })
    
    
})


app.post('/login', (req,res)=>{
    const {email, password}= req.body
    User.findOne({email: email})
    .then((user)=>{
        if(user){
            if(user.password===password){
                res.json('Success Login')
            }else{
            res.json('Invalid Password')
        }
        }else{
            res.json('Invalid Email')
        }
    })
    .catch((err)=>console.log(err))
    
    
})





app.listen(port,()=>{
    console.log("server running");
    
})
