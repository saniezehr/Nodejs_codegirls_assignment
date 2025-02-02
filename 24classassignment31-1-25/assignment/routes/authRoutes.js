const express = require("express");
const router = express.Router();
const path = require("path");


router.get("/", (req, res) => {
    res.send(`<h1>WELCOME !</h1><br><h3>Click here to login <a href="/login">Login</a></h3>`);
});

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/login.html"));
});

router.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/profile.html"));
});


router.post("/login", (req, res) => {
    const { username, password } = req.body;
    
    if (username === "admin" && password === "123") {
        req.session.user = username;
        return res.redirect("/profile");
    }
    
    res.send("Invalid credentials. Try again.");
});


router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send("Error logging out.");
        }
        res.redirect("/login");
    });
});

module.exports = router;
