let express = require('express');// require express module
let app = express();
const bodyParser = require('body-parser'); // require body parser
require('dotenv').config(); //config dotent
const POST = process.env.POST || 8080; // declare port

// use bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// allow access origin
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

// use router
let routers = require('./api/routers/routers');
routers(app);

// return 404
app.use( (req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found.'});
});

app.listen(POST, () => {// run on post
    console.log("RESTful API server started on: " + POST);
})