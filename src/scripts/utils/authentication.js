const JWT = require('jsonwebtoken');

const generateAccessToken = (user) => {
    return JWT.sign({ name: user.email, ...user }, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: "1w"}); //name ve user ın kendisi !!!JWT sign name degiskenine ihtiyac duyari yoksa calismaz, email ile name ettik
};

const generateRefreshToken = (user) => {
    return JWT.sign({ name: user.email, ...user }, process.env.REFRESH_TOKEN_SECRET_KEY); 
};

module.exports = {
    generateAccessToken,
    generateRefreshToken
}
