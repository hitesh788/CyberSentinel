require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const newsRoutes=require("./routes/news")

const incidentRoutes = require("./routes/incidents");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/news",newsRoutes)


app.get("/", (req, res) => {
  res.send("CyberSentinel API is running...");
});

app.use("/api/incidents", incidentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`CyberSentinel server running on port ${PORT}`);
});