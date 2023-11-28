const express = require("express");
const cors = require("cors");
require("./db/config");

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("backend is working");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
