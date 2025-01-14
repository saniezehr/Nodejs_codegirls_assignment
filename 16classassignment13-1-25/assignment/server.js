import express from 'express';
import ejs from 'ejs';

const app = express();
const port = 8000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Dummy user data
const users = [
  { id: 1, name: "Ali", age: 26 },
  { id: 2, name: "Sara", age: 14 },
  { id: 3, name: "Fizza", age: 15 },
  { id: 4, name: "Miraal", age: 22 },
  { id: 5, name: "Thanos", age: 20 },
  { id: 6, name: "Haisum", age: 18 },
  { id: 7, name: "Daniyal", age: 17 },
  { id: 8, name: "Warisha", age: 20 },
  { id: 9, name: "Azlaan", age: 30 },
  { id: 10, name: "Maisum", age: 19 },
];

// Route to fetch a user by ID
app.get("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).send("User Not Found");
  }

  if (user.age < 18) {
    return res.status(403).send("User is under 18 and access is not allowed");
  }

  // Render the user data in the EJS view
  res.render('user', { user });
});

app.get('/users',(req,res) => {
  res.render('users' ,{users})
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
