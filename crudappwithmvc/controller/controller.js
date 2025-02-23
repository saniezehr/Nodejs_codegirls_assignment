import { users } from "../database/connect.js";
import { ObjectId } from "mongodb";

// Home Page (Fetch Users)
 const homeUsers = async (req, res) => {
    try {
        const allUsers = await users.find().toArray();
        res.render("index", { users: allUsers });
    } catch (error) {
        console.error("Error fecth:", error);
        res.status(500).send("Error loading ");
    }
};

// Add User
 const addUser = async (req, res) => {
    const { name, email, password, age } = req.body;
    await users.insertOne({ name, email, password, age: parseInt(age) });
    res.redirect("/");
};

// Update User
 const updateUser = async (req, res) => {
    const { id, name, email, password, age } = req.body;
    await users.updateOne(
        { _id: new ObjectId(id) },
        { $set: { name, email, password, age: parseInt(age) } }
    );
    res.redirect("/");
};

// Delete User
 const deleteUser = async (req, res) => {
    const { id } = req.body;
    await users.deleteOne({ _id: new ObjectId(id) });
    res.redirect("/");
};

export {homeUsers,addUser,updateUser,deleteUser}