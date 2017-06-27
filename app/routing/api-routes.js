//links data files
var dogFriends = require('../data/dog-friends.js');
var peopleFriends = require('../data/owner-friends.js');

//npm packages
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function(app){

	//calculates difference between user scores and potential friend scores
	function getDifference (userScores, friendScores){
		var difference = 0;
		for (var i=0; i<userScores.length; i++) {
			difference += Math.abs(userScores[i]-friendScores[i]);
		}
		return difference;
	}

	//determines best friend based on survey results
	function findBestFriend(req, res, userArray, friendArray) {
		//pushes survey data into array
		var surveyData = req.body;
		userArray.push(surveyData);
		//outside loop to not instantiate with each loop
		var scoreDiff = [];
		var bestFriend = {};
		//populates array of scores differences
		for (var i=0; i<friendArray.length; i++) {
			scoreDiff.push(Math.abs(getDifference(surveyData.scores, friendArray[i].scores)));
		}
		//finds best friend
		var indexSmallestDiff = 0;
		for (var i=1; i<scoreDiff.length; i++) {
			if (scoreDiff[i] < scoreDiff[indexSmallestDiff]) {
				indexSmallestDiff = i;
			}
		}
		bestFriend.name = friendArray[indexSmallestDiff].name;
		bestFriend.photo = friendArray[indexSmallestDiff].photo;
		//sends best friend data to browser
		res.json(bestFriend);
	}

	//displays all possible dog friends
	app.get('/api/dog/friends', function (req, res) {
		res.json(dogFriends);
	});

	//displays all possible people friends
	app.get('/api/people/friends', function (req, res) {
		res.json(peopleFriends);
	});

	//returns best friend results using dog survey results
	app.post('/api/dog/friends', function (req, res) {
		findBestFriend(req, res, dogFriends, peopleFriends);
	});

	//returns best friend results using future owner survey results
	app.post('/api/people/friends', function (req, res) {
		findBestFriend(req, res, peopleFriends, dogFriends);
	});

};//ends module.exports



