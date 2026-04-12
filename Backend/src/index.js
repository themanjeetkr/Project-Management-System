import dotenv from 'dotenv';
import app from './app.js';
import express from 'express';
import cors from 'cors';
import connectDB from './db/db.js';

dotenv.config();

// Middleware configuration
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static("public"));

app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(',') || "http://localhost:5173",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Connect to Database then start server
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`process.env.PORT || Server is running on port 3000`);
        });
    })
    .catch((error) => {
        console.error('Failed to connect to the database:', error);
        process.exit(1);
    });