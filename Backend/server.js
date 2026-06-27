const express = require('express');
const cors = require('cors')
const app = express();
const dotenv = require('dotenv')
dotenv.config();

const connectDB = require('./config/db')
const Comment = require('./routes/Comment')
connectDB();
app.use(express.json());
app.use(cors());
app.use("/", Comment);

app.get('/', (req,res) => {
    res.send('Welcome to the SERVER SIDE.!')
});

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
    
});