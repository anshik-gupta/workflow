import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const { default: pool } = await import("./config/database.js");

try {
    await pool.query("SELECT 1");
    console.log("Database connected successfully!");
} catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Workflow server running on port ${PORT}`);
});