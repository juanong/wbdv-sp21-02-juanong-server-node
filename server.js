// require is equivalent to import
const express = require('express')
const app = express()
// Connect this to Atlas
const MONGODB_URI = process.env.MONGODB_URI

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Use mongoose to connect to a Mongo database
const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true});

// Configure CORS (setting access)
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/quizzes-controller')(app)
require('./controllers/question-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

require('dotenv').config();
app.listen(process.env.PORT || 3001)