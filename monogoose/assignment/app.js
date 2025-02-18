import express from 'express';
import mongoose from 'mongoose';
import ejs from 'ejs';
import 'dotenv/config';

const app = express()
const port = 7000;

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.set('view engine','ejs')

mongoose.connect(process.env.uri)
.then(()=>{console.log('connected')})
.catch(()=>{console.log("error")})

const userSchema = new mongoose.Schema({
    //yai type and unique match isliyai lagay because email string nhi hoskty
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
});

const user = mongoose.model('user',userSchema);

//home page

app.get('/', async(req,res) => {
const users = await user.find();
res.render('index',{users});
})

//add form
app.get('/add',(req,res) =>{
res.render('add');

})

//add 
app.post('/add',async(req,res) => {
    const {name,email,password} = req.body;
    const newUser = new user({name,email,password}); 
    await newUser.save();
    res.redirect('/');
})

// Update user
app.post('/edit/:id', async (req, res) => {
    const { name, email, password } = req.body;
    await user.findByIdAndUpdate(req.params.id, { name, email, password });
    res.redirect('/');
});


//delete

app.post('/delete/:id',async(req,res) => {
    await user.findByIdAndDelete(req.params.id);
    res.redirect('/');
})

app.listen(port,()=>{
    console.log("YAYYY !!! SERVER IS RUNNING :) !");
})
