const mongoose = require("mongoose");

const app = require("../app");

const { DB_HOST, PORT = 5555 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    /* app.listen(PORT || 5555); */
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
