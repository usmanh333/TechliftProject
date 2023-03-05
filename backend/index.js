let express = require('express');
let app = express();
require('./Database/config') // require DB
let ServiceRoutes = require('./Routes/PostService') // require services routes
let RegisterRoute = require('./Routes/Register')
let LoginRoute = require('./Routes/Login')
let color = require('colors');
require('dotenv').config(); //To Create Environment variable
const PORT = process.env.PORT || 5000

app.use('', ServiceRoutes) // making routes
app.use(RegisterRoute) // register routes
app.use(LoginRoute) // login routes

try {
    app.listen(PORT, 
        console.log(`The Server is listening on port : ${process.env.PORT} and mode is ${process.env.MODE}`.bgMagenta) // ()=> deprecated
    )
} catch (error) {
    console.log("The server is not listening on port", error)
}