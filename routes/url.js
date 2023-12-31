const express = require("express");

const router = express.Router();
const {
  handleGenerateNewUrl,
  handleGetAnalytics,
} = require("../controllers/url");

router.post("/", handleGenerateNewUrl);
router.get("/analytics/:ShortID", handleGetAnalytics);

module.exports = router;
