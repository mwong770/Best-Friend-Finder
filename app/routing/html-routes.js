//used to determine path
var path = require('path');

//sends requested html page
module.exports = function(app) {

    app.get('/pet/survey', function(req, res) {
        res.sendFile(path.join(__dirname, "..", "public", "pet-survey.html"));
    });

    app.get('/owner/survey', function(req, res) {
        res.sendFile(path.join(__dirname, "..", "public", "owner-survey.html"));
    });

    //if path doesn't match, sends home page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "..", "public", "home.html"));
    });
};