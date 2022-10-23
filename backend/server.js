// example server.js file to build off of
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const shelfRoutes = require("./routes/shelf.route");
const companyRoutes = require("./routes/company.route");
const warehouseRoutes = require("./routes/warehouse.route");
const shipmentRoutes = require("./routes/shipment.route");
const bookingOptionRoutes = require("./routes/bookingoption.route");
dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API Running!");

});

app.use("/api/shelves", shelfRoutes);

app.use("/api/companies", companyRoutes);

app.use("/api/warehouses", warehouseRoutes);

app.use("/api/shipments", shipmentRoutes);

app.use("/api/bookingoptions", bookingOptionRoutes);

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);
