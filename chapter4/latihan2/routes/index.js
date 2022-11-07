const express = require("express");
const router = express.Router();

module.exports = router;

/* Middleware */
// function logger(req, res, next) {
//   console.log("time", Date.now());
//   next();
// }

// router.use(logger);

router.get("/products", (req, res) => {
  return res.json([
    {
      id: 1,
      name: "apple",
    },
    {
      id: 2,
      name: "xiaomi",
    },
    {
      id: 3,
      name: "samsung",
    },
  ]);
});

router.get("/products/:productId", (req, res) => {
  const { productId } = req.params;
  let { brand, type } = req.query;

  //   http://localhost:3000/products/1
  //   http://localhost:3000/products/10?brand=miniso☻
  //   http://localhost:3000/products/10?brand=miniso&type=keyboard
  if (!brand) {
    brand = productId == 1 ? "apple" : productId == 2 ? "xiaomi" : "samsung";
  }

  // res.json({
  //   id: productId,
  //   name: brand,
  //   type: type ? type : null,
  // });

  return res.render("products/detail", {
    id: productId,
    name: brand,
    type: type ? type : null,
  });
});

router.get("/orders", (req, res) => {
  return res.json([
    {
      id: 1,
      is_paid: true,
      user_id: 1,
    },
    {
      id: 2,
      is_paid: true,
      user_id: 2,
    },
    {
      id: 3,
      is_paid: false,
      user_id: 3,
    },
  ]);
});

router.get("/orders/:orderId", (req, res) => {
  const { orderId } = req.params.orderId;

  res.json({
    id: orderId,
    is_paid: orderId == 1 || orderId == 2 ? true : false,
    user_id: orderId,
  });
});

// Post using insomnia
router.post("/products", (req, res) => {
  const { name } = req.body;

  res.send(name);
});
