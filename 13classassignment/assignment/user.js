import express from 'express'

const app = express();
const port = 8000;

const users = [
    {id : 1 ,name : "Ali"     , age:26},
    {id : 2 ,name : "Sara"    , age:14},
    {id : 3 ,name : "Fizza"   , age:15},
    {id : 4 ,name : "Miraal"  , age:22},
    {id : 5 ,name : "Thanos"  , age:20},
    {id : 6 ,name : "Haisum"  , age:18},
    {id : 7 ,name : "Daniyal" , age:17},
    {id : 8 ,name : "Warisha" , age:20},
    {id : 9 ,name : "Azlaan"  , age:30},
    {id : 10,name : "Maisum"  , age:19},

]

app.get("/users" , (req ,res )=>{
 res.send(`<pre>${JSON.stringify(users,null,2)}</pre>`);
})

app.get("/users/:id" , (req , res ) => {

    const userId = parseInt(req.params.id);
    const user = users.find(users => users.id === userId);

    if(!user){
        res.status(404).send("User Not Found");
    }

    else if (user.age < 18){
        res.status(403).send("'User is under 18 and access is not allowed");
    }
    else{
        res.send(`<pre>${JSON.stringify(user,null,2)}</pre>`)
    }
})
app.listen(port ,(req, res) => {
  console.log("Server Is Running");
})