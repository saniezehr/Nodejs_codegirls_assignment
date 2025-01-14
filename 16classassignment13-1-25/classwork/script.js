import express from 'express'
import ejs from 'ejs'
const abc = express();
const port = 8000;

abc.set("view engine" , "ejs");

abc.get("/" , (req,res) => {
    res.render('index')
})
abc.listen(port,() => {
  console.log("server is running");
})