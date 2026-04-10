import dotenv from 'dotenv';
import app from './app.js';
import express from 'express';
import cors from 'cors';
// const app = express();
dotenv.config()
// basic configuration
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static("public"));
app.use(cors({
    origin:process.env.CORS_ORIGIN?.split(',') || "'http://localhost:5173'",
    credentials:true,
    methods:['GET','POST','PUT','DELETE', 'PATCH'],
    allowedHeaders:['Content-Type', 'Authorization']

}))
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})


// let username = process.env.APP_USERNAME;
// console.log(username);

