const express = require('express');
const mongoose = require('mongoose');
const student = require('./routes/studentroute.js');
const admin = require('./routes/adminroute.js');
const app = express();

app.use(express.json());

app.use('/admin',admin);
app.use('/student',student);

try {
    mongoose.connect(process.env.MONGOOSE_URL);
    console.log("DataBase Connected");
} catch (error) {
    console.log(error.message);
}
app.listen(process.env.PORT,()=>{
    console.log(`Server Started at ${process.env.PORT}`);
})