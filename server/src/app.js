import express from "express";
import cors from "cors";

import authRouter from "./auth/auth.routes.js";

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL
}));

app.use(express.json());

app.use("/api/auth", authRouter);

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Workflow API is running"
    });
});

export default app;