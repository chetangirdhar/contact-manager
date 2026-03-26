// import express
const express = require("express");
const router = express.Router();

// import model
const Contact = require("../models/Contact");


// CREATE CONTACT
router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body); // data from frontend
    await newContact.save(); // save to DB
    res.json(newContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// GET ALL CONTACTS
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find(); // fetch all
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// DELETE CONTACT
router.delete("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id); // delete by id
    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;