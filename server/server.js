const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
require('dotenv').config()

//CONNECTION - PORT
const PORT = process.env.PORT || 5000;

//BODY PARSING MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles:true
}))

app.listen(PORT,() => {
    console.log("Server is running on Port:",PORT);
})

//ROUTES
app.use('/user',require('./routes/userRouter'))
app.use('/api',require('./routes/categoryRouter'))
app.use('/api',require('./routes/productRouter'))
app.use('/api',require('./routes/upload'))

//CONNECT - MongoDB
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, {
    //useCreateIndex:true,
    //useFindAndModify:false,
    //useNewUrlParser:true,
    //useUnifiedTopology:true
})
.then(() => {
    console.log("MongoDB Connected");
}).catch(err => {
    console.log(err);
})