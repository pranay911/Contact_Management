const express = require("express");
const router = express.Router();
const {
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");
router.use(validateToken);
router.get("/", getContacts);

router.get("/:id", getContact);

router.post("/", createContact);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

// router.route.get("/", getContacts).post("/", createContact);

module.exports = router;
