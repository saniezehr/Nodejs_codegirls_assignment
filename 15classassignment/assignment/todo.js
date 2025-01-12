import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/todo', (req, res) => {
    const todos = req.body; // Assuming an array of tasks is sent

    if (!todos || todos.length === 0) {
        return res.status(400).json({ error: "No tasks provided" });
    }

    console.log("Received tasks:", todos);
    res.status(200).json({
        message: "Tasks submitted successfully",
        received: todos
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
