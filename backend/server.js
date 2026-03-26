// import packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// create app
const app = express();

// middleware
app.use(cors()); // allow frontend connection
app.use(express.json()); // read JSON data

// connect MongoDB
mongoose.connect("mongodb+srv://admin:12345@cluster0.xxxx.mongodb.net/contacts")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("API Working");
});

// import routes
const contactRoutes = require("./routes/contactRoutes");

// use routes
app.use("/api/contacts", contactRoutes);

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});