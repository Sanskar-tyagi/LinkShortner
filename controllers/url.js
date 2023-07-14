const shortid = require("shortid");
const URL = require("../models/url");
async function handleGenerateNewUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url chahiye!" });
  const ShortID = shortid();
  await URL.create({
    ShortID: ShortID,
    redirectURL: body.url,
    VisitHistory: [],
  });
  return res.json({ id: ShortID });
}
async function handleGetAnalytics(req, res) {
  const ShortID = req.params.ShortID;
  const result = await URL.findOne({ ShortID });
  console.log(ShortID);
  return res.json({
    totalClicks: result.VisitHistory.length,
    analytics: result.VisitHistory,
  });
}

module.exports = { handleGenerateNewUrl, handleGetAnalytics };
