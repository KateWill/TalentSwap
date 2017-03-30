let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let passportLocalMongoose = require('passport-local-mongoose');

let User = new Schema({
  //email: { type : String, unique : true, required : true, dropDups : true },
  password: { type : String },
  username: { type : String, required: true, unique : true, dropDups : true },
  talent: { type : String },
  zipcode: { type: String },
  bio: { type: String },
  screenname: { type: String },
  role: { type: String, default: 'user' },
  comment: [{type: String}],
  likes: {type: Number, default: 0}
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model( 'User', User );
