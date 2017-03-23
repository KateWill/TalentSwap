let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let passportLocalMongoose = require('passport-local-mongoose');

let User = new Schema({
  // email: { type : String, unique : true, required : true, dropDups : true },
  password: { type : String, required : true },
  username: { type : String, required: true, unique : true, dropDups : true },
  // talent: { type : String, required : true },
  // zipcode: { type: String, required : true },
  role: { type: String, default: 'user' }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model( 'User', User );
