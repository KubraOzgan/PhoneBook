const { insert, list, findNum, deleteNum, modify } = require('../services/Contacts');
const httpStatus = require('http-status');

const create = (req, res) => {
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

const findContact = (req, res) => {
    findNum(req.body)
    .then((contact) => {
        if(!contact) {
            return res.status(httpStatus.NOT_FOUND).send({ message: "Contact not found!"});
        }
        res.status(httpStatus.OK).send(contact);
    })
    .catch((err) => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
};

const deleteContact = (req, res) => {
    deleteNum(req.body)
    .then((contact) => {
        if(!contact) {
            return res.status(httpStatus.NOT_FOUND).send({ message: "Contact not found!"});
        }
        res.status(httpStatus.OK).send(contact);
    })
    .catch((err) => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
}

const update = (req, res) => {
    if(!req.params?.id) {
        return res.status(httpStatus.BAD_REQUEST).send({ message: "Contact not found!"});
    }
    modify(req.body, req.params?.id)
    .then(updated => {
        res.status(httpStatus.OK).send(updated);
    })
    .catch((err) => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({error: "Not completed."});
    });
};



module.exports = {
    create,
    index,
    findContact,
    deleteContact,
    update
};