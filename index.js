const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))


// app.use((req, res, next) => {
//     console.log("in the middleware");
//     next(); // Allows the request to continue to the next middleware
// });

app.use(adminRoutes);

app.use("/", (req, res, next)=> {
    console.log("Welcome to the home page");
    res.send("<h1> Welcome to the home page </h1>");
    
});

app.use('' ,(req, res, next) => {
    console.log("in another middleware");
    res.send("<h1> Hello there from express! </h1>");
});


// handle the 404 
app.use((req, res, res) => {
    res.status(404).send('<h1> Opps! Page not found </h1>')
});

const server = http.createServer(app);
server.listen(3000);