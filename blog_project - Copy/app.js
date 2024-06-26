import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes.js';

const app = express();
const port = 3000;
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/IST256SOLO2', {
    useNewUrlParser: true,
    newUnifiedTopology: true,
    autoCreate: true
}).then(()=> {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB", err)
})
app.use('/users', userRouter);

app.listen(port, () => {
    console.log("Server is Running")
})