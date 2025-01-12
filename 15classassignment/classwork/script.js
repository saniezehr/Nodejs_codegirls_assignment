import express from 'express'

const app = express();
const port = 3000 ;

app.use(express.json());

app.post('/data',(req,res) => {
    const {name,age} = req.body ;

    if(!name && !age) {
        console.log("fields are required");
        res.status(404).json({"error":"fields are required"});

    }
    console.log("Received data:", { name, age });
    res.status(200).json({
        message : "form are success",
        received : {
            name,
            age
        }
    })
})

app.listen(port , () => {
    console.log("server is running")
})