const express = require("express");
const session = require("express-session");
const controllers = require("./controllers");
const sequelize = require("./config/configuration");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(controllers);

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 2 * 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  sequelize.sync({ force: false });
  console.log(`App listening on port ${PORT}!`);
});
