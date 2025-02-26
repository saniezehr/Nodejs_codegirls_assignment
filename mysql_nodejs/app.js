import express from 'express';
import mysql from 'mysql';
const app = express();
const port = 8800; 


var connection = mysql.createConnection({
    host : 'localhost',
    user :'root',
    password:'',
    database:'nodejs_crud'
})

app.get('/createtable' , function(req,res){


connection.connect(

    function(err){
        if(err) {
            console.error('Connection error:', err);
            return res.status(500).send('Database connection failed');
        };
        console.log('connected');
        createTable(res)
    }
)
})
//creating a table
function createTable(res){
    var roleTable = "CREATE TABLE IF NOT EXISTS role(id INT AUTO_INCREMENT PRIMARY KEY ,name VARCHAR(100)  NOT NULL)";
    var userTable ="CREATE TABLE IF NOT EXISTS user (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL ,email VARCHAR(255)NOT NULL UNIQUE,password VARCHAR(255) , role_id INT, FOREIGN KEY(role_id) REFERENCES role(id) ON DELETE SET NULL )";


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
}

// insert data

app.get('/insert',function (req,res){

    connection.connect(function(err,result){
        if(err) {
            console.error('Connection error:', err);
            return res.status(500).send('Database connection failed');
        }
        console.log('connected!');
        insertData(res);
    })
    
})

    function insertData(res){
        var sql = "INSERT INTO role (name) VALUES ('admin')";
        connection.query(sql,function(err,result){
            if (err){
                console.error('Error inserting data:', err);
            return res.status(500).send('Error inserting data');
            }
            res.send("Congradulations:) !!! Your Data Inserted!");
            


        })
    }



    app.get('/updatedata',function(req,res){

     connection.connect(
       function(err){
            if (err) {
                console.error('Connection error:', err);
                return res.status(500).send('Database connection failed');
            }
            console.log("connected!") ;
            update(res);
            })
     
       
    })

    function update(res){

        var update="UPDATE role SET name='Super Admin' WHERE id = 1"
        connection.query(update,function(err,result){

            if(err) {
                console.error('Error updating data:', err);
                return res.status(500).send('Error updating data');
            
            }
            res.send("updated!!")
        })
        connection.end()

    }

    app.listen(port,()=>{
        console.log("running");
    })