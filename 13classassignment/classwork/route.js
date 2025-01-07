import express from 'express'

const abc = express();
const port = 3000;

abc.get('/',(req,res) => {

    res.send("hello world");
})

// ? :-  any word or alphabet before ? is optional in routing
abc.get('/ab?cd' , (req,res) => {
    res.send("you can use acd or abcd in routing")
})

abc.get('/ab(cd)?ef' ,(req,res) => {
    res.send("you can use also bracket")
})

// + :- you can add multiple times that alphabet or word whose comes before + .
abc.get('/ab+cd' ,(req,res) => {
    res.send("you can add multiple times that word whose comes before + .")
})
// * :- you can add anything after * this .
abc.get('/ab*cd' ,(req,res) => {
    res.send("you can add rondom thing");
})

// /a/ :- anything strats with a .
abc.get(/a/ ,(req,res) => {
    res.send("starts with a")
})

// anything only comes before thing
abc.get(/.*thing$/ , (req ,res ) => {
    res.send("anything only comes before thing");
})

// route parameters
abc.get('/user/:userId/book/:bookid' , (req,res) => {
    res.send(`your user id is ${req.params.userId} and your book id is ${req.params.bookid}`);
})

abc.listen(port, () => {
    console.log("server is starting");
})