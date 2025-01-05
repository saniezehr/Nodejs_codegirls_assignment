const http = require('http');
const fs = require('fs');
const url = require('url');

// File Path for JSON Data
const FILE_PATH = './data.json';

// Read JSON File
const readData = (callback) => {
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err) {
            return callback([])
        };  // Return empty array if file doesn't exist or error occurs
        callback(JSON.parse(data));
    });
};

// Write JSON File Asynchronously           
const writeData = (data, callback) => {
    fs.writeFile(FILE_PATH, JSON.stringify(data,null,2), 'utf8', (err) => {
        if (err)
            { 
                return console.error('Error writing file:', err)

            };
        callback();
    });
};

// Create the HTTP server
http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Serve HTML form
    if (parsedUrl.pathname === '/' && req.method === 'GET') {
        fs.readFile('./form.html', 'utf8', (err, html) => {
            if (err) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>Error loading registration form.</h1>');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        });
    }


    // Handle POST request to save form data
    if (parsedUrl.pathname === '/submit' && req.method === 'POST') {
        let body = '';

        // Collect form data
        req.on('data', data => {
            body += data;
        });

        // Once the form data is fully received
        req.on('end', () => {
            // Parse form data directly from the body
            const postData = new URLSearchParams(body);
            const newData = {
                name: postData.get('name'),
                email: postData.get('email'),
                password: postData.get('password')
            };

            // Read existing data and append new data
            readData((existingData) => {
                existingData.push(newData);

                // Save data to JSON file asynchronously
                writeData(existingData, () => {
                    res.writeHead(302, { 'location':'/data' });
                    res.end();
                });
            });
        });
    }

    // Serve the saved data as JSON
    if (parsedUrl.pathname === '/data' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        readData((data) => {
            res.end(JSON.stringify(data,null,2));
        });
    }

}).listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});
