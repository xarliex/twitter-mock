const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const User = require("../models/User");
const dbURL = require("../config").dbURL;

mongoose.connect(dbURL).then(()=> console.log("connected"))
const salt = bcrypt.genSaltSync(bcryptSalt);
const password = "";
const encryptedPass = bcrypt.hashSync(password, salt);
const users = [
  { username: "Sergio", password: encryptedPass },
  { username: "Alvaro", password: encryptedPass },
  { username: "Carlos", password: encryptedPass }
];
User.collection.drop();

users.forEach(u => {
  let ur = new User(u);
  ur.save((err, user) => {
    if (err) {
      throw err;
    }
    console.log(`userSaved ${user.username}`);
  });
});
