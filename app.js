const express = require("express");
const app = express();
const passport = require("./config/passport");
const cors = require("cors");
const bodyParser = require("body-parser");
//Routes

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//GET private SignUp/LogIn with Google

app.listen(8080);
