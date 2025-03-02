import mysql from 'mysql';


export const connection = mysql.createConnection({
    host : 'localhost',
    user :'root',
    password:'',
    database:'nodejs_crud'
})

connection.connect(

    function(err){
        if(err) {
            console.error('Connection error:', err);
            return res.status(500).send('Database connection failed');
        };
        console.log('connected');
    }
)