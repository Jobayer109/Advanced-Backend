const router = require("express").Router();
const db = require("../db/db");

// Ticket id related routes
router.get("/t/:ticketId", (req, res) => {
  const ticketId = req.params.ticketId;
  const ticket = db.findById(ticketId);
  res.status(200).json(ticket);
});
router.patch("/:t/ticketId", (req, res) => {
  const ticketId = req.params.ticketId;
  const updatedTicket = db.updateById(ticketId, req.body);
  res.status(200).json({ message: "Updated successfully", updatedTicket });
});
router.delete("/t/:ticketId", (req, res) => {
  const ticketId = req.params.ticketId;
  const result = db.deleteById(ticketId);
  res.status(200).json({ message: "Deleted successfully", result });
});

// Username related routes
router
  .route("/u/:username")
  .get((req, res) => {
    const username = req.params.username;
    const tickets = db.findByUsername(username);
    res.status(200).json(tickets);
  })
  .patch((req, res) => {})
  .delete((req, res) => {});

// Other common routes
router.post("/sell", (req, res) => {
  const { username, price } = req.body;
  const ticket = db.create(username, price);
  res.status(200).json({ message: "Ticket created successfully", ticket });
});

router.post("/bulk", (req, res) => {
  const { username, price, quantity } = req.body;
  const tickets = db.bulkCreate(username, price, quantity);
  res
    .status(200)
    .json({ message: "Bulk tickets created successfully", tickets });
});

router.get("/draw", (req, res) => {
  const winnerCount = req.query.wc ?? 3;
  const winners = db.draw(winnerCount);
  res.status(200).json(winners);
});

router.get("/", (req, res) => {
  const tickets = db.find();
  res.status(200).json(tickets);
});

module.exports = router;
