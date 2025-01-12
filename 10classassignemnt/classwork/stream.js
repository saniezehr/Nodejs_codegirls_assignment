// import fs from 'fs';

// let read = fs.createReadStream("largedata.json"); 

//     read.on('data',function(chunck){
//         console.log(chunck.toString())
//     })

//     let write = fs.WriteStream("newwrite.txt");

//     write.on('data' , function (chunck) {

//     })

// const readfile = fs.createReadStream("largedata.json" , {flags:'a' })
// const writefile= fs.createWriteStream("transfer.json");

// readfile.on('data',function(chunck){
//     writefile.write(chunck);
// });
// const http = require ("http")
import http from 'http';
const writebody = function(req,res){
    res.writeHead(200,{'content-type':'html'})
res.write('<h1>hello!</h1>');
res.end();

}
const server = http.createServer(writebody);
server.listen(8000);
http.createServer(function(req,res){
    res
});