const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const controller = require("./controller");
const routes = require("./routes");

app.use(express.json());
app.use(morgan("dev"));
app.use("/public", express.static("public")); // publish folder public

app.set("view engine", "ejs");

// home endpoint
app.get("/", (req, res) => {
  res.render("home");
});

app.use(routes);

// error endpoint harus di paling bawah
app.get("/error", (req, res) => {
  error;
});

// error 404 handler
app.use(controller.exceptions);

// handle server error
app.use(controller.notFound);

app.listen(port, () => console.log("listening on port", port));
