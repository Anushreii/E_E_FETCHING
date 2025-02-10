require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

//env
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const uri = new MongoClient(MONGO_URI);

app.listen(6969,()=>{
    console.log('server started on http://localhost:6969');
})
 
app.get('/list', async(req,res)=>{
    await uri.connect();
    let result = await uri.db('employees').collection('login_details').find().toArray();
    res.json(result);
});

