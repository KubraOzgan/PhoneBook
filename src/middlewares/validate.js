const httpStatus = require("http-status");

const validate = (schema) => (req, res, next) => {
    const {value, error}= schema.validate(req.body); //value req ile gelen degerin kendisi
    if(error) {
        //error.details = [{message: ''}, {message: ''}, ...] default 
        const errorMessage = error.details?.map(detail => detail.message).join(', ') 
        //['','',....] => '', '', ... 
        res.status(httpStatus.BAD_REQUEST).json({ error : errorMessage } );
        return;
    }
    Object.assign(req, value); //validate ten çikan data ile reqi bind et ve dişari gonder
    return next();
}

module.exports = validate;

//Middlewareler routing seviyesinde is gorur.
