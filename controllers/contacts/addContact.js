const { Contact } = require('../../models');

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);

  if (!req.body) {
    return res.status(400).json({ message: 'missing required name field' });
  }

  res.status(201).json({
    result,
  });
};

module.exports = addContact;
