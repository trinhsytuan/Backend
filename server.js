const express = require("express");
require("dotenv").config();
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "*" }));
const apiRoute = require('./apiRoute/apiRoute');
app.use("/api", apiRoute)
async function main() {
  try {
    app.listen(process.env.LISTEN_PORT, () => {
      console.log("Server running port:" + process.env.LISTEN_PORT);
    });
  } catch (error) {
    console.log(">>>> Error Connect to DB:", error);
    console.log("Server Error, please contact TServices");
    process.exit();
  }
}
main();