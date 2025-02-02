const express = require("express");
const session = require("express-session");
const authRoutes = require("./routes/authRoutes");
const sessionCheck = require("./middleware/sessionCheck");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session Middleware
app.use(session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

// Apply Middleware to Protect Routes
app.use("/profile", sessionCheck);

// Use Routes
app.use("/", authRoutes);

const port = 3000;
app.listen(port, () => 
    console.log(`Server running on port ${port}`)
);
