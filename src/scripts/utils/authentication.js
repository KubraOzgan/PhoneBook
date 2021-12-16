const JWT = require('jsonwebtoken');
//Datayi verdiginiz key e gore sifreleyip belli bir sure icinde aksiyon almanizi saglar

const generateAccessToken = (user) => {
    return JWT.sign({ name: user.email, ...user }, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: "1w"}); //name ve user ın kendisi !!!JWT sign name degiskenine ihtiyac duyari yoksa calismaz, email ile name ettik
    //Gonderdigim objeyi(user) imzala
};

const generateRefreshToken = (user) => {
    return JWT.sign({ name: user.email, ...user }, process.env.REFRESH_TOKEN_SECRET_KEY); 
};

module.exports = {
    generateAccessToken,
    generateRefreshToken
}

//login olan kullaniciya token ver, bu token aslinda login olan kullanicinin kendisi
//Bbunun icindeki tum bilgileri olusturacagimiz hash de(sifrede) sakliyoruz

//Front end den back end e istek gonderilirken token gonderilir. 
//Token verify edilir yani sifre cozulur, kullanici bilgilerine ulasilir ve boylece yola devam edilir.