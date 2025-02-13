import express from 'express';
import { MongoClient,ObjectId } from 'mongodb';
import path from 'path';
import ejs from 'ejs';
import { fileURLToPath } from 'url';

const app = express()
const port =8000;

// ***mongo connections***
const uri = "mongodb+srv://sz1769193:QJYIL6iOVg6xP9fs@codegirls.fzzjy.mongodb.net/?retryWrites=true&w=majority&appName=Codegirls"
const client = new MongoClient(uri);

// datbase names and colletcions names

const database = "crudappfinal";
const collection = "users";

// files
const file = fileURLToPath(import.meta.url);
const dirname =path.dirname(file);
app.use(express.static(path.join(dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs');
app.set('views',path.join(dirname,'views'))

let db,users;
(async () =>{
    try{
        await client.connect();
         db = client.db(database);
        users = db .collection(collection)

        // Start server
app.listen(port, () => {
    console.log(`running`);
});
    }
    catch(err){
        console.log("database error",err)
    }
})();


//index.html

app.get("/", async (req,res) => {
    try{
        const allUsers =await users.find().toArray();
        res.render('index',{users:allUsers});
    }
    catch(error){
        console.error('Error fetching users:', error);
        res.status(500).send('Error loading users');
    }

})

// create

    
app.post("/adduser", async (req,res) =>{
    const {name,email,password,age}=req.body;
    await users.insertOne({name,email,password,age:parseInt(age)});
    res.redirect("/");
});

//update user
app.post("/updateuser",async (req,res)=>{
    const {id,name,email,password,age} =req.body;
    await users.updateOne(
        { _id: new ObjectId(id)},
        {
            $set:{name,email,password,age:(parseInt(age))}
        }
    );
    res.redirect("/");

})

// delete user

app.post('/deleteuser', async(req,res)=>{
    const {id}= req.body;
    await users.deleteOne({_id: new ObjectId(id)});
    res.redirect('/')
});

