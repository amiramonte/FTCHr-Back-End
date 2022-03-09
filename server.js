const express = require("express");
const controllers = require("./controllers");
const sequelize = require("./config/configuration");
const jwt = require('jsonwebtoken');
const cors = require('cors');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(controllers);

app.listen(PORT, () => {
  sequelize.sync({ force: false });
  console.log(`App listening on port ${PORT}!`);
});

// socket.io portion
// import cors from "cors";
// const morgan = require("morgan");
// import chat from "./controllers/chat";

// app
// const http = require("http").createServer(app);

// socket io
// const io = require("socket.io")(http, {
//   path: "/socket.io",
//   cors: {
//     origin: ["http://localhost:3000", "http://localhost:3001"],
//     methods: ["GET", "POST"],
//     allowedHeaders: ["content-type"],
//   },
// });

// var sequelize = require('socket.io-sequelize');
// io.use(sequelize('ftchr_db', 'root', 'password', { host: 'localhost' }, 'app/models'));

// // middlewares
// app.use(express.json({ limit: "5mb" }));
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(morgan("dev"));

// // api routes
// // make sure to install cors from npm before using api routes from your react client
// app.get("/api", (req, res) => {
//   res.send("node api");
// });

// // socket
// chat(io);

// const port = process.env.PORT || 8000;

// http.listen(port, () => console.log(`Server running on port ${port}`));