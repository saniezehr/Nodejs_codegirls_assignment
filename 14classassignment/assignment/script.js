import express from "express";

const app = express();
const port = 3000;

app.use("/users/:id", (req, res, next) => {
    const { pwd, userrole } = req.query; 
    const userId = req.params.id;

    if (userId === "1" && pwd === "admin@1234" && userrole === "admin") {
        req.role = "admin"; // Mark as admin
        next();
    } else if (userId === "2" && pwd === "user@1234" && userrole === "user") {
        req.role = "user"; // Mark as user
        next();
    } else {
        // Reject if credentials or ID don't match
        res.status(403).send("Forbidden");
    }
});

// Route to handle users
app.get("/users/:id", (req, res) => {
    if (req.role === "admin") {
        res.send("Welcome Admin");
    } else if (req.role === "user") {
        res.send("Welcome User");
    } else {
        res.status(403).send("Forbidden");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
