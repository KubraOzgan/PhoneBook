const User = require('../models/Users')

const insert = (userData) => {
    const user = new User(userData)
    return user.save();
};

const list = () => {
   return User.find({});
}

const loginUser = (loginData) => {
    return User.findOne(loginData); //findOne icindekine gore sorgu yapar, req.body ile email ve password geliyor.
}

module.exports = {
    insert,
    list,
    loginUser
}