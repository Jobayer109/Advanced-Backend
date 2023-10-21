const router = require("express").Router();

router.get("/health", (_req, res) => {
  res.status(200).json({ message: "Server's health is good" });
});

module.exports = router;
