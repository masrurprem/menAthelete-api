const express = require("express");
require("./db/database_conn");
const router = require("./routers/menRouter");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

//
app.listen(port, (error) => {
  if (error) {
    console.log("app cannot connect", error);
  }
  console.log("app connected. Listening from port", port);
});
