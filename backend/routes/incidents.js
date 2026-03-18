const express = require("express");
const router = express.Router();
const {
  getIncidents,
  getLiveIncidents,
  addIncident,
} = require("../controllers/incidentController");

router.get("/", getIncidents);
router.get("/live", getLiveIncidents);
router.post("/", addIncident);

module.exports = router;