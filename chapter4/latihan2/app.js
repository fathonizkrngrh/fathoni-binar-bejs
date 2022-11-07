const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.set("view engine", "ejs");
/* Middleware */
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
app.use(logger);

// third party middleware
const morgan = require("morgan");
app.use(morgan("dev"));
// End

const router = require("./routes");
app.use(router);

app.get("/", (req, res) => {
  // res.status(200).json({ status: "success", message: "welcome to nyoba" });

  return res.render("welcome");
});

// 500 Error Handler

app.get("/iniError", (req, res) => {
  iniError;
});

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "failed",
    message: err.message,
  });
});

// 404 error handler
app.use((req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: " are you lost?",
  });
});

app.listen(port, () => console.log("listening on port", port));
