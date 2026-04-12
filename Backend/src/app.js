import express from 'express';
const app = express();


import healthRoutes from './routes/healthcheckrouter.js';

app.use('/health', healthRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

export default app;