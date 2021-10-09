const express = require("express");
const path = require("path");
const app = express();

const date = (req, res, next) => {
  const datee = new Date();
  const day = datee.getDay();
  const hours = datee.getHours();
  if (day == 6 || hours < 8 || hours > 19) {
    res.send("we are closed 😞 😓");
  } else {
    next();
  }
};

app.use("/", date);

// set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));