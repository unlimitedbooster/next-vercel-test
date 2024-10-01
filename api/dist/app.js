"use strict";
// import express from "express";
// import projectsRoutes from "./routes/projects";
// // var express = require('express');
// import path from "path";
// import cors from "cors";
// import productsRoutes from "./routes/products";
// import resendRouter from "./routes/resend";
// // const express  = require("express")
// // const cors  = require("cors")
// const app = express();
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static("src/public"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors({ origin: "http://localhost:3000" }));
// const userRouter = require("./routes/users");
// app.use("/users", userRouter);
// app.use("/resend", resendRouter);
// app.use("/products", productsRoutes);
// export default app;
// @ts-ignore
const express = require("express");
const path = require("path");
const cors = require("cors");
const productsRoutes = require("./routes/products");
// @ts-ignore
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS
    ? process.env.CORS_ALLOWED_ORIGINS.split(",")
    : [];
// const allowedOrigins = [
//   "http://localhost:3000",
//   "https://mrc-two.vercel.app",
//   // "https://mrc-two.vercel.app/materials/*",
//   "https://mrc-*-radodds-projects.vercel.app",
// ];
const corsOptions = {
    //@ts-ignore
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin)
            return callback(null, true);
        const isOriginAllowed = allowedOrigins.some((pattern) => {
            const regex = new RegExp(`^${pattern.replace(/\*/g, ".*")}$`);
            return regex.test(origin);
        });
        if (isOriginAllowed) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
app.use(cors());
// app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use("/products", productsRoutes);
// app.listen(port, () => {
//   console.log("Supabase connected");
//   console.log("Server running on port: " + port);
// });
// app.use((req: any, res: any, next: any) => {
//   console.log(`Request received at: ${req.url}`);
//   next();
// });
app.get("/health", (req, res) => {
    res.status(200).send("OK");
});
const dotenv = require("dotenv");
dotenv.config();
// const env = require("./util/validateEnv");
const port = 3001;
app.listen(port, () => {
    console.log("Supabase connected");
    console.log("Server running on port: " + port);
});
// module.exports = app;
