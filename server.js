// require is equivalent to import
const express = require('express')
const app = express()

// Use mongoose to connect to a Mongo database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/whiteboard', {useNewUrlParser: true, useUnifiedTopology: true});


const demos = require('./controllers/demo-controller')
demos(app)

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

app.listen(3000)