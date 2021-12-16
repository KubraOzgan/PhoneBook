const httpStatus = require("http-status");
const JWT = require("jsonwebtoken");

//authorization bilgisi req.header icinde
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'] //req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1] //bearer token, token kismini aldik
    //const token = req.headers?.authorization=.split(' )[1] || null(null gelirse if'e duser)
    if(token == null) {
        return res.status(httpStatus.UNAUTHORIZED).send({ error: 'You have to login first to do this process.' });
    }

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
        if(err) {
            return res.status(httpStatus.FORBIDDEN).send({ error: err })
        }
        req.user = user; //Middleware de req i manipule ettik, burda user aslinda yok, gelen token ile biz useri ekledik yani usera bagli islem yapacak hale geldik
        next();
    });
};

module.exports = authenticateToken;