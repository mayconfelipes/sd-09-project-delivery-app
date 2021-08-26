const express = require("express");
const router = express.Router();

router.get("/", (_req, res) => res.status(418).json({ message: "Café" }));

module.exports = router;
