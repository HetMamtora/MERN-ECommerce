const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config()

const PORT = process.env.PORT || 5000;

app.get('/',(req,res) => {
    res.json({msg:"This is Eg"});
})

app.listen(PORT,() => {
    console.log("Server is running on Port:",PORT);
})

//CONNECT - MongoDB
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, {
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log("MongoDB Connected");
}).catch(err => {
    console.log(err);
})