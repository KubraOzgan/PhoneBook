const winston = require('winston');
 
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'contact-service' },
  transports: [
   
    new winston.transports.File({ filename: 'src/logs/contacts/error.log', level: 'error' }), //Auri ayri kaydetmek istiyorsak level belirtmeliyiz.
    new winston.transports.File({ filename: 'src/logs/contacts/info.log', level: 'info' }), 
    new winston.transports.File({ filename: 'src/logs/contacts/combined.log' }), //error + info
],
});
 
module.exports = logger;
