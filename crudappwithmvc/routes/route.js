import express from "express";
import { homeUsers, addUser, updateUser, deleteUser } from "../controller/controller.js";

const router = express.Router();

router.get("/", homeUsers);
router.post("/adduser", addUser);
router.post("/updateuser", updateUser);
router.post("/deleteuser", deleteUser);

export default router;
