const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    env: process.env.APP_ENV || "unknown",
    secret_name: process.env.SECRET_NAME ? "set" : "missing"
  });
});

const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () => console.log(`listening on ${port}`));
}

module.exports = app;

