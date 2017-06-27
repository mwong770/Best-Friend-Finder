
//npm packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//creates application
var app = express();

//sets port
var PORT = process.env.PORT || 3000;

//tells Express this folder contains static files
app.use(express.static(path.join(__dirname, 'app', 'public')));

//parses data sent in post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//routes
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

//starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
