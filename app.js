const express = require('express')

const bodyParser = require('body-parser')
require('dotenv').config()
const route = require("./src/Routes")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use('/api', route)


//No route exists config
app.use(function(req, res, next){
    res.setHeader('Content-Type','application/json');
    res.status(404).end(JSON.stringify({
        "message": "No route found"
    }))
    next()
})

//Error handler
process.on('unhandledRejection', (reason, p) =>
{
    console.log('Unhandled Rejection at: Promise '+p+' reason: '+reason);
});

process.on('uncaughtException', (e) => {
    console.error(e);
});


module.exports = app