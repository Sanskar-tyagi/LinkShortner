const express = require("express");
const { ConnectToDB } = require("./Connect");
const URL = require("./models/url");
const URI =
  "mongodb+srv://Shornter:qT6Y61pK15QCpYFy@shortner.10phs3l.mongodb.net/test";
const app = express();
ConnectToDB(URI).then(() => {
  console.log("DB connected");
});
const urlRoute = require("./routes/url");
const PORT = 8001;
app.use(express.json());
app.use("/url", urlRoute);
app.get("/:ShortID", async (req, res) => {
  const ShortID = req.params.ShortID;
  console.log(ShortID);
  const entry = await URL.findOneAndUpdate(
    {
      ShortID,
    },
    {
      $push: {
        VisitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  if (!entry) {
    return res.status(404).send("URL not found");
  }

  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
