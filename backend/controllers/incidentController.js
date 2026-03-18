const Incident = require("../models/Incident");
const { fetchThreatIntel } = require("../services/threatIntel");

const seedIncidents = async () => {
  const count = await Incident.countDocuments();
  if (count === 0) {
    await Incident.insertMany([
      {
        title: "Credential stuffing attempt on banking login",
        source: "Seed Data",
        severity: "High",
        sector: "Banking",
        attackType: "Credential Attack",
        description: "Multiple failed login attempts detected from suspicious IP ranges.",
        location: "India",
      },
      {
        title: "Malware attachment delivered via spoofed email",
        source: "Seed Data",
        severity: "Medium",
        sector: "Education",
        attackType: "Malware",
        description: "Spoofed institutional email delivered malicious attachments.",
        location: "India",
      },
    ]);
  }
};

const getIncidents = async (req, res) => {
  try {
    await seedIncidents();
    const incidents = await Incident.find().sort({ date: -1 });
    res.json(incidents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLiveIncidents = async (req, res) => {
  try {
    const data = await fetchThreatIntel();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch live incidents" });
  }
};

const addIncident = async (req, res) => {
  try {
    const incident = await Incident.create(req.body);
    res.status(201).json(incident);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getIncidents,
  getLiveIncidents,
  addIncident,
};