const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");
require("./passport");
const googleAuth = require("./Routes/google");
const githubAuth = require("./Routes/github");
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(
  session({
    name: "session",
    secret: "mohamed",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 100,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use("/auth", googleAuth);
app.use("/auth", githubAuth);

const { users } = require("./users");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
