const express = require("express");
const router = require("./routes/index");
const errorHandler = require("./middlewares/ErrorHandlerMiddlware");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
  morgan("combined", {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  })
);

app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
