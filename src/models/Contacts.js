const Mongoose = require('mongoose');
const { info } = require('../scripts/logger/Contacts');
const logger = require('../scripts/logger/Contacts');

const ContactSchema = new Mongoose.Schema({
    name: String,
    sName: String,
    phoneNum: String,
}, 
{ timestamps: true, versionKey: false } );

ContactSchema.post('save', (doc) => {
    console.log("After", doc);
    logger.log({
        level: 'info',
        message: doc
    })

})

module.exports = Mongoose.model('contact', ContactSchema); 
