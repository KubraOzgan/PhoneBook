const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema({
    name: String,
    sName: String,
    password: String,
    email: String
}, 
{ timestamps: true, versionKey: false } );



module.exports = Mongoose.model('user', UserSchema); 