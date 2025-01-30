import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();
const port = 5000;


app.use(express.urlencoded({extended:true}))
app.use(cookieParser());


app.get("/" ,(req,res) =>{
    res.sendFile("C:/Users/Lenovo/Desktop/practice/Nodejs_codegirls_assignment/23classassignment29-1-25/assignment/login.html")
})

app.get("/dashboard" ,(req,res) => {
    if(!req.cookies.user){
    return res.send("Access Denied! Please <a href='/'>Login</a> first.");

    }
  res.send(`<h1>Welcome to Dashboard</h1><a href="/logout">Logout</a>`);

})

app.post("/login" ,(req,res) => {
    const {username,userpassword} = req.body;

    if(username==="admin" && userpassword === "12345"){
        res.cookie('user',username,{maxAge:6000})
        res.redirect("/dashboard")
    }
    else {
        res.send("Invalid Credentials! <a href='/'>Try Again</a>");
      }
})

app.get("/logout" ,(req,res) => {
    res.clearCookie("user")
    res.redirect("/")
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });