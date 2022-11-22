require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
// const passport = require('./utils/passport');
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
// app.use(passport.initialize());
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("listening on port", "PORT", process.env.PORT);
});
