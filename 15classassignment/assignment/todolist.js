import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// In-memory to-do list
let todos = [];

// POST method to add a task to the list
app.post('/todos', (req, res) => {
    const { task } = req.body;

    if (!task) {
        console.log("Task is required");
        return res.status(404).json({ "error": "Task is required" });
    }

    // Add task to the todos array
    const newTodo = {
        id: todos.length + 1,
        task,
    };
    todos.push(newTodo);

    console.log("Task added:", newTodo);
    return res.status(200).json({
        message: "Task added successfully",
        todo: newTodo
    });
});

// GET method to retrieve all tasks
app.get('/todos', (req, res) => {
    console.log("Retrieving all tasks");
    return res.status(200).json({
        message: "Tasks retrieved successfully",
        todos
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
