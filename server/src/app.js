import express from "express";
import cors from "cors";

import authRouter from "./auth/auth.routes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL
}));

app.use(express.json());

app.use("/api/auth", authRouter);

app.use(errorHandler);

export default app;