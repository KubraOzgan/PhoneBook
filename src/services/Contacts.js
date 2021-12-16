const Contact = require('../models/Contacts')

const insert = (contactData) => {
    const contacts = new Contact(contactData)
    return contacts.save();
};

const list = () => {
   return Contact.find({});
}

const findNum = (data) => {
    return Contact.findOne(data);
}

const deleteNum = (data) => {
    return Contact.deleteOne(data);
}

const modify = (data, id) => {
    return Contact.findOneAndUpdate(id, data, { new: true }) 
  /*   return Contact.findById(id)
    .then(contact => {
        contact.id = data?.id;
        return contact.save();
    }) */
}

/* const modify = (data, name) => {
    return Contact.findOneAndUpdate(name, data, { new: true }) 
  //  return Contact.findById(name)
  //  .then(contact => {
  //      contact.name = data?.name;
  //     return contact.save();
  //  }) 
}
 */
module.exports = {
    insert,
    list,
    findNum,
    deleteNum,
    modify
}