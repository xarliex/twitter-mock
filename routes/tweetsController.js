const express = require("express");
const tweetsController = express.Router();
const mongoose = require("mongoose");
const dbURL = require("../config").dbURL;
const Tweet = require("../models/Tweet");
mongoose.connect(dbURL).then(()=> console.log("connected"))


    // const tweets = [
    //     { tweet: "My first tweet"},
    //     { tweet: "My second tweet"},
    //     { tweet: "My third tweet"}
    //   ];
      
    //   tweets.forEach(t => {
    //     console.log(`tweetSaved ${tweet.tweet}`);
    //     });
    //   });

tweetsController.get("/mytweets", (req, res, next) => {
    Tweet.find({user_name: "pepe"})
    .then((tweetArr) =>{
        res.render("mytweets", { tweets: tweetArr });
        next();
    });
});

module.exports = tweetsController;
