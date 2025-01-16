import express from 'express';
import ejs from 'ejs';

const app = express();
const port = 6785;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing html form data

const username = "sani";
const userpass = "12345";

app.get('/', (req, res) => {
  res.render("form");
});

app.post('/form', (req, res) => {
  const { name, pass } = req.body;

  if (!name || !pass || name !== username || pass !== userpass) {
    console.log("you are wrong");
    res.status(404).json({ "error": "you are wrong bye bye :)" });
} 
    else{    
          console.log("Received data:", { name, pass });
          res.status(200).json({
              message: "welcome user ;)",
              received: {
                  name,
                  pass
              }
          });}
  
});

app.listen(port, () => {
  console.log(`running`);
});
