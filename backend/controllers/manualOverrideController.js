const ManualOverride = require('../models/manualOverrideModel');

// Create a new manual override event
const createManualOverride = async (req, res) => {
    try {
      const { device_id } = req.params;
      const { reason } = req.body;
      const start_time = new Date();
  
      const manualOverride = new ManualOverride({ device_id, start_time, reason });
      await manualOverride.save();
  
      res.status(201).json(manualOverride);
    } catch (error) {
      console.error('Error creating manual override:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

const endManualOverride = async (req, res) => {
    try {
      const { device_id } = req.params;
  
      const manualOverride = await ManualOverride.findOneAndUpdate(
        { device_id, end_time: null },
        { $set: { end_time: new Date() } },
        { new: true }
      );
  
      if (!manualOverride) {
        return res.status(404).json({ error: 'No active manual override found for the device' });
      }
  
      res.status(200).json(manualOverride);
    } catch (error) {
      console.error('Error ending manual override:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

// Get all manual override events for a device
const getManualOverridesByDeviceId = async (req, res) => {
  try {
    const { device_id } = req.params;

    const manualOverrides = await ManualOverride.find({ device_id });
    res.status(200).json(manualOverrides);
  } catch (error) {
    console.error('Error getting manual overrides by device ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createManualOverride,
  endManualOverride,
  getManualOverridesByDeviceId
};
