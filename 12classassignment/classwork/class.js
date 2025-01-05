const http = require('http'); 
const fs = require('fs');

// Creating a server
http.createServer((req, res) => {

    fs.readFile('index.html', "utf-8", (err, file) => {
        // If error reading the index.html, try to read 404.html
        if (err) {
            fs.readFile('404.html', (error, filedata) => {
                // If error reading 404.html, send a plain text error message
                if (error) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end("File not found");
                    return; // Stop execution here
                }
                // If 404.html is found, send it as response
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(filedata);
                return; // Stop execution here
            });
        }

else{
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(file);
    }
    });
}).listen(8000, 'localhost')