require('dotenv-safe').config()
const express = require("express")
const cors = require("cors")
const mongoose = require("./database/mongooseConnect.js")
const institutionsRoute = require("./routes/institutionsRoute")
const coursesRoute = require("./routes/coursesRoute")
const usersRoute = require("./routes/usersRoute")
const swaggerFile = require('../swagger/swagger_output.json');
const swaggerUi = require('swagger-ui-express')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(institutionsRoute)
app.use(coursesRoute)
app.use(usersRoute)
app.use('/my-documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app