const mongoose = require("mongoose");
const dbURL = require("../config").dbURL;
mongoose.connect(dbURL).then(()=> console.log("connected"))

const Tweet = require("../models/Tweet");
const User = require("../models/User");
User.findOne({username: "pepe"}).then((user) =>{
    console.log(user)
    const tweets = [
        { tweet: "My first tweet", user_id: user._id, user_name: user.username},
        { tweet: "My second tweet", user_id: user._id , user_name: user.username },
        { tweet: "My third tweet", user_id: user._id, user_name: user.username}
      ];
      Tweet.collection.drop();
      
      tweets.forEach(t => {
        let tw = new Tweet(t);
        tw.save((err, tweet) => {
          if (err) {
            throw err;
          }
        console.log(`tweetSaved ${tweet.tweet}`);
        });
      });
});
