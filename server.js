const express = require("express");
const controllers = require("./controllers");
const sequelize = require("./config/configuration");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(controllers);

app.listen(PORT, () => {
  sequelize.sync({ force: false });
  console.log(`App listening on port ${PORT}!`);
});
