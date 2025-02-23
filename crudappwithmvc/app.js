import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./routes/route.js";
import { connection } from "./database/connect.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Middleware
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", userRoutes);

// server & mongodb
connection().then(() => {
    console.log("  Connected");
    app.listen(PORT, () => console.log(`running`));
}).catch(err => {
    console.error("  Failed:", err);
});
