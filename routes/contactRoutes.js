const express = require("express");
const router = express.Router();

/*
 GET - api/contacts/
 Get all Contacts

*/
router.get("/", (req, res) => {
  //   res.send("Get All Contacts");
  //   res.status(200).send("Get All Contacts");
  res.json({ message: "Get All Contacts" });
});

/*
 GET - api/contacts/
 Get Particular Contact

*/
router.get("/:id", (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
});

/*
 POST - api/contacts/
Post contact
*/
router.post("/", (req, res) => {
  res.status(200).json({ message: "Create Contact" });
});

/*
 PUT - api/contacts/id
 Update Particular Contact

*/
router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
});

/*
 DELETE - api/contacts/id
Delete Particular Contact
*/
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
});

module.exports = router;
