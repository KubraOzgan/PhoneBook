const { insert, list, loginUser } = require('../services/Users');
const httpStatus = require('http-status');
const { generateAccessToken, generateRefreshToken } = require('../scripts/utils/authentication')
const { passwordToHash } = require('../scripts/utils/helper')

const create = (req, res) => {
    req.body.password = passwordToHash(req.body.password);
    insert(req.body)
    .then((response) => {
        res.status(httpStatus.CREATED).send(response);
    })
    .catch((err) => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
};

const index = (req, res) => {
    list()
    .then((response) => {
        res.status(httpStatus.OK).send(response);
    })
    .catch((err) => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
};

const login = (req, res) => {
    loginUser(req.body)
    .then((user) => {
        if(!user) {
           return res.status(httpStatus.NOT_FOUND).send({ message: "User not found!"});
        }
        user = {
            ...user.toObject(),//user in icindeki her seyi bunun icerisine aktar, ek olarak tokens obj olustur
            tokens: {
                access_token: generateAccessToken(user), 
                refresh_token: generateRefreshToken(user),
            },
        };
        //delete user.password;
        res.status(httpStatus.OK).send(user);
    })
    .catch((err) => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
};

module.exports = {
    create,
    index,
    login
};
