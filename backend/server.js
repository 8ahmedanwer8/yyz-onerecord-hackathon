// example server.js file to build off of
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT;
app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API Running!");
});

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);
