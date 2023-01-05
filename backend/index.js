/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';
import cors from 'cors';

// Importing user route
import router from './routes/assignments.js'
import mongoose from "mongoose";
// const router = require('router')

// const bodyParser = require('body-parser')

const app = express()
const port = 3001

app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));

app.use(bodyParser.json())
// Adding a Router
// app.use('/users', router);
app.use('/assignments',router);

await mongoose.connect('mongodb+srv://AbdulMannan:03105784747@cluster0.zcxktsd.mongodb.net/?retryWrites=true&w=majority');

app.get('/', (req, res) => {
    res.send('Hello Universe!')
})

app.get('/todos', (req, res) => {
    res.send('A list of todo items will be returned')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Posting a Request')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})