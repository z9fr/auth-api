const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const privRoute = require('./routes/private')

// import routs 
const authRoute = require('./routes/auth');

dotenv.config();
//connect db 

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
    console.log("connect to db!")
);

//middle ware 
app.use(express.json());
app.use('/api/user',authRoute)
app.use('/api/', privRoute)

app.listen(3000, () => console.log("server up and running"));

