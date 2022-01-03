const express = require('express');
const app = express();
const studentRoute = require('./routes/student')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/API', {useNewUrlParser: true}, (err) => {
if (!err) {console.log('MongoDB Connection Succeeded.') }
else {console.log('Error in DB connection:' + err) }
});


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/student',studentRoute)



app.use((req,res,next) => {
    res.status(404).json({
       error:'bad request' 
    })
})


module.exports = app;


