import express from 'express'
import cookieparser from 'cookie-parser'
let port = 5000;
let app = express();

app.use(cookieparser());

app.get("/",(req , res) => {
    res.send('welcome to express app')
})

let users ={
    name : "sani",
    age : 17
}

app.get('/setuser', (req,res) => {

res.cookie("user_data" , users);
res.send("user data added to cookie")
})
app.get("/getuser" ,(req ,res) =>{
    res.send(req.cookies);
})


app.listen(port,(err)=>{
    console.log("server is listening")
})