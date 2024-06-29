const express = require("express");

require("dotenv").config();
const PORT = process.env.PORT || 8000;

const app = express();

// Application's Route Handlers
app.get("/", (req, res) => {
  res.send("Hello, World! Verify Email Widget");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is Listening on PORT ${PORT}`);
});
