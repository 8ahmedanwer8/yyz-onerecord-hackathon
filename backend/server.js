const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const cheerio = require("cheerio");
const https = require("https");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();

// https
//   .get("https://www.ouac.on.ca/university-links/", (res) => {
//     let data = "";
//     res.on("data", (chunk) => {
//       data += chunk;
//     });
//     res.on("end", () => {
//       // data = JSON.parse(data);
//       console.log(data);
//     });
//   })
//   .on("error", (err) => {
//     console.log(err);
//   });
// const html = data;
// const $ = cheerio.load(html);
// console.log($.root().html());

// $("#wrapper", html).each(function () {
//   // const title = $(this).text();
//   // const url = $(this).find("a").attr("href");
//   // console.log($(this).text());
//   console.log(1);
// });
connectDB();
const app = express();

const PORT = process.env.PORT;
app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API Running!");
});

app.get("/info", (req, res) => {
  console.log(req);
  res.send({
    uni: `mcmaster`,
    program: "mechatronics engineering",
  });
});

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);
