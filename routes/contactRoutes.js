const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //   res.send("Get All Contacts");
  //   res.status(200).send("Get All Contacts");
  res.json({ message: "Get All Contacts" });
});

module.exports = router;
