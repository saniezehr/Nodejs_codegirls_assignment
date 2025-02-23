import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express()
const port = 7000;

app.use(express.json());

mongoose.connect(process.env.uri)
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("failed");
})

const blogpostschema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    createdAt: {type:Date,default:Date.now},
    comment :[{type:mongoose.Schema.Types.ObjectId,ref:'Comment'}]
})

const blogpostmodel = mongoose.model('blogpost',blogpostschema);


const blogcommentschema =new mongoose.Schema({
    blogpost:{type:mongoose.Schema.ObjectId,ref:'blogpost'},
    author :String,
    comment:String,
    createdAt :{type:Date,default:Date.now},

})

const commentmodel =mongoose.model('comment',blogcommentschema);

app.post("/post",async(req,res)=>{

    try{
      const newpost = new blogpostmodel(req.body);
      await newpost.save()
      res.status(201).json(newpost);
    }
    catch(err){

        res.status(404).json({error:err.message})
    }
})

app.post("/comment",async(req,res)=>{
    try{

        const newcomment = new commentmodel(req.body);
        await newcomment.save();

        // linking
        await blogpostmodel.findByIdAndUpdate(newcomment.blogpost,{
            $push:{
                    comment:newcomment._id
            }
        });
        

        res.status(201).json(newcomment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
})
app.listen(port, () => console.log(' running'));