let express = require('express');// require express module
let app = express();
const bodyParser = require('body-parser'); // require body parser
require('dotenv').config(); //config dotent
const POST = process.env.POST || 8080; // declare port
const cors = require('cors');
const cookieParser = require('cookie-parser')

// use bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// use cookie-parse
app.use(cookieParser());

// allow access origin
app.use(cors());

// use router
let routers = require('./api/routers/routers');
routers(app);

// return 404
app.use( (req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found.'});
});

app.listen(POST, () => {// run on post
    console.log("Dincox server started on port: " + POST);
})