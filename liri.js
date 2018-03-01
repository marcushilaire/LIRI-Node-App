var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
require("dotenv").config();
var keys = require("./keys.js");
// console.log(keys);

var fs = require("fs");

var twitterKeys = keys.twitter;
var client = new Twitter(keys.twitter);
// console.log(client);

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

client.get("statuses/user_timeline", function(error, tweets, response){
    if(error) throw error;
    for(var i=0; i<tweets.length;i++){
console.log(i + ")" + "On - "+ tweets[i].created_at + " - " + tweets[i].text)
}
});
