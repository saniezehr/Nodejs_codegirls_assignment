import express from 'express'
import ejs from 'ejs'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();
const port = 7889;

const __filepath =fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filepath);

// app.use(express.static('files'));

app.use('/static' , express.static(path.join(__dirname,'files')));
app.listen(port ,() => {
    console.log("running");
})

app.set("view engine" ,"ejs")

app.get("/" ,(req,res) => {
    res.render('index')
})