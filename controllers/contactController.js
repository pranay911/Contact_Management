//@desc get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  //   res.send("Get All Contacts");
  //   res.status(200).send("Get All Contacts");
  res.json({ message: "Get All Contacts" });
};

//@desc get contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.json({ message: `Get Contact for ${req.params.id}` });
};

//@desc Create New contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  res.status(201).json({ message: "Create Contact" });
};

//@desc Update the contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
};

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
