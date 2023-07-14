const mongoose = require("mongoose");

async function ConnectToDB(url) {
  return mongoose.connect(url);
}

module.exports = { ConnectToDB };
