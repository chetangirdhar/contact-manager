// import mongoose
const mongoose = require("mongoose");

// schema define
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
});

// export model
module.exports = mongoose.model("Contact", contactSchema);