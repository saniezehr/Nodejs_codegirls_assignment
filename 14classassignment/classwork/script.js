import express from 'express'

const app = express();
const port = 8000;

app.use((req,res,next) => {
    console.log(`logging ${req.method} ${req.url}`);
    next();
})

app.use("/users/1" ,(req,res,next) => {
    const {pwd ,role} = req.query ;
    console.log(role); // Log the role directly

    if(pwd === "hello@1234" && role === "admin"){
        console.log("yes right");
        res.send("yes right");
        next();
    }
    else{
        res.status(403).send("forbidden");
    }

});

app.get("/admin" ,(req,res) => {
    res.send("admin is here");
})

app.get("/user/:id" ,(req,res) => {
    res.send("user is here");
})

app.post("/admin" ,(req,res) => {
   
}) 

app.get("/abc/:id" ,(req,res) => {
    res.send(`hello ${req.params.id}`);
})

app.get("/" ,(req,res) => {
    res.send("hello home");
})
app.listen(port , () => {
    console.log("server is running")
})