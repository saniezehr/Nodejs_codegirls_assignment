import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
const app = express();
const port = 8000;


async function main() {
    await mongoose.connect("mongodb+srv://sz1769193:XpLILT1Pccc4Yn07@codegirls.fzzjy.mongodb.net/?retryWrites=true&w=majority&appName=Codegirls");
    const kittenSchema=new mongoose.Schema({
        name : String,
        age:Number
    })
    const kitten = mongoose.model('kitten', kittenSchema);

    const kittenname = new kitten({name :"hazel" , age:30})
    kittenname.save().then(()=> console.log(kittenname.name,kittenname.age))

}



main()

app.listen(port,()=>{
    console.log("running")
})