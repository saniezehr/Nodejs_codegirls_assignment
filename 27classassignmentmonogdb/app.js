import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const port = 8000;

const uri = "mongodb+srv://sz1769193:QJYIL6iOVg6xP9fs@codegirls.fzzjy.mongodb.net/?retryWrites=true&w=majority&appName=Codegirls";

const client = new MongoClient(uri)

async function run() {
    try {
        await client.connect();
        const database = client.db("crudapp");
        const collection = database.collection("users");
//1)   // insertOne()

        // const result = await collection.insertOne({
        //     name: "John",
        //     email: "john@gmail.com",
        //     age: 18,
        //     createdAt: new Date()
        // });

//2)   // insertmany()

    //     const users=[{
    //         name:"sani",
    //         email:"sani@gmail.com",
    //         age:17,
    //         createdat : new Date()
    //     },
    //     {
    //         name:"ali",
    //         email:"ali@gmail.com",
    //         age:17,
    //         createdat : new Date()
    //     }
    // ]

    //     const result = await collection.insertMany(users)

//3)   // updateOne

    // const filter ={name:"sani"}
    // const updateDoc ={$set : {age:20}}

    // const result = await collection.updateOne(filter,updateDoc);

    // if(result.matchedCount > 0){
    //     console.log(`${result.modifiedCount} document uodated :) !!`)
    // } else{
    //     console.log("No matching document found.")
    // }

//4)    //updateMany()
    // Update multiple documents where city is 'Karachi'
    // const filter = { age: 20}; 
    // const updateDoc = {
    //     $set: { age: 30, name: "Updated User" }
    // };

    // Update many documents
    // const result = await collection.updateMany(filter, updateDoc);

    // console.log(`${result.matchedCount} documents matched.`);
    // console.log(`${result.modifiedCount} documents updated.`);
     console.log("Document added:", result);
    } catch (error) {
        console.error("Connection failed:", error);
    } finally {
        await client.close();
    }
}

run();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
