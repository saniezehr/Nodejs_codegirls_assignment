
import express from 'express';
const app = express();
const port = 8800; 
import { connection } from './server/server.js';
import { roleTable } from './Model/role/table.js';
import { userTable } from './Model/user/table.js';
import { insertroledata,updaterole,selectrole } from './query/role/query.js';
import { insertuserdata,selectuser,updateuser,deleteuser } from './query/user/query.js';

app.get("/",function(req,res){
    connection.query(selectrole,function(err,roleresult){
        if (err){
            console.log("error fecthing ");
           return res.status(500).send("error fecthing")
        }
        console.log("your role ddata is fecthed successfully:)!!")
    

    connection.query(selectuser,function(err,userresult){
        if(err){
            console.log("error fecthing user data")
            return res.status(500).send("user error data fecthing")
        }
        console.log("your user data is fecthed successfully:)!!")
        res.json({ roles: roleresult, users: userresult });
    })
    })
})

app.get('/createtable' , function(req,res){
        connection.query(roleTable, function (err, result){
        if (err){
            console.error('Error creating role table:', err);
            return res.status(500).send('Error creating role table');
        }
        console.log("Role table created")

        connection.query(userTable, function (err, result){
            if (err) {
                console.error('Error creating role table:', err);
                return res.status(500).send('Error creating role table');
            }
            console.log("User Table Created");
            
    
            res.send("Table Created");

            });
        })

})
//creating a table


// insert data

app.get('/insert',function (req,res){


    connection.query(insertroledata,function(err,result){
        if (err){
            console.error('Error inserting data:', err);
        return res.status(500).send('Error inserting data');
        }
        console.log("role data insert")
    


        connection.query(insertuserdata,function(err,result){
            if (err){
                console.error('Error inserting data:', err);
            return res.status(500).send('Error inserting data');
            }
            console.log("user data insert")
            res.send("Congradulations:) !!! Your  Data Inserted!");
        }) 

    })
})






app.get('/updatedata',function(req,res){


    
    connection.query(updaterole,function(err,result){

        if(err) {
            console.error('Error updating data:', err);
            return res.status(500).send('Error updating data');
        
        }
        console.log("updated role finally")
    
    connection.query(updateuser,function(err,result){

        if(err) {
            console.error('Error updating data:', err);
            return res.status(500).send('Error updating data');
        
        }
        console.log("updated user data finally")
        res.send("data updated!! ")
    })
})

})


    app.get('/delete', function(req,res){
        connection.query(deleteuser,function(err,result){

            if(err){
                console.log("not delted user data",err);
                return res.status(500).send("error in deleting data")
            }
            console.log("deleted finally")
            res.send("deleted your data :)!!")
        })
    })
app.listen(port,()=>{
    console.log("running");
})
