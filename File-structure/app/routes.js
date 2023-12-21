const router = require("express").Router();

router.use("/api/v1/tickets", require("../routes/tickets"));

router.get("/health", (_req, res) => {
  res.status(200).json({ message: "Server's health is good" });
});

module.exports = router;
