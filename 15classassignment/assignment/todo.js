import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// Array to store todo
let todos = [];

app.post('/todo', (req, res) => {
    const tasks = req.body; 

    if (!tasks || tasks.length === 0) {
        
         res.status(400).json({ error: "No tasks provided" });
    }

    todos.push(...tasks); // Add tasks to the array
    console.log("Received tasks:", tasks);
    res.status(200).json({
        message: "Tasks submitted successfully",
        received: tasks
    });
});

app.get('/todo', (req, res) => {
    if (todos.length === 0) {
        
         res.status(404).json({ error: "No tasks found" });
    }

    res.status(200).json({
        message: "Tasks retrieved successfully",
        todos
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
