const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("database connection succesful");
  })
  .catch((err) => {
    console.log("database cannot be connected", err);
  });
