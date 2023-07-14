import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import hellorouter from './router/hellorouter.js'

dotenv.config();
const app  = express();

app.use(express.json())
app.use("/hello",hellorouter)

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}|| Connected To Database Succesfully`);
      });
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
