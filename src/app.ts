import express from "express"
import bodyParser from "body-parser"
const compression = require('compression')
const multer = require('multer') // v1.0.5
const morgan = require("morgan")
const app = express()
// const upload  = multer()

//init middlewares
app.use(morgan('dev'))
app.use(compression())
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(upload())

//init db
require('./dbs/init.elasticsearch')

//init routers
app.use( require("./routers/index"))


module.exports = app