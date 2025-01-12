import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/data', (req, res) => {
    const { name, age } = req.body;

    // Check if either 'name' or 'age' is missing
    if (!name && !age) {
        console.log("fields are required");
        res.status(404).json({ "error": "fields are required" });
    } 
  
        // If no error, send success response
        console.log("Received data:", { name, age });
        res.status(200).json({
            message: "form submitted successfully",
            received: {
                name,
                age
            }
        });
    }
);

app.listen(port, () => {
    console.log("Server is running on port", port);
});
