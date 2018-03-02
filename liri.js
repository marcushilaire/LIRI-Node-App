var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var twitterKeys = keys.twitter;
var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);
var action = process.argv[2];
var query = process.argv[3];


// // console.log(spotifyKeys);
// // console.log("=======")
// // console.log(twitterKeys);
// // fs.readFile("random.txt", "utf8", function(error, data) {
// //     if (error) {
// //       return console.log(error);
// //     }
// //     console.log(data);
// //     });
// client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
//     if(error) throw error;
//     console.log(tweet);  // Tweet body. 
//     console.log(response);  // Raw response object. 
//     });
if(action){
    if (action == "my-tweets"){
        client.get("statuses/user_timeline", function(error, tweets, response){
            if(error) throw error;
            for(var i=0; i<tweets.length;i++){
        console.log(i + ")" + "On - "+ tweets[i].created_at + " - " + tweets[i].text)
    }});
    }else if (action == "spotify-this-song"){
        spotify.search({ type: 'track', query: query }, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
            }
            var results = data.tracks.items[0];
            console.log("Title: " + results.name)
            console.log("Artists: " + results.artists[0].name);
            console.log("Album: " + results.album.name);
            console.log("Listen Here: " + results.preview_url);
    })}
}else {console.log(spotify)}