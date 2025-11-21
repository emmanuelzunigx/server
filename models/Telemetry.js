// models/Datos.js
const mongoose = require('mongoose');

const telemetrySchema = new mongoose.Schema({
  temp: {
    type: Number,
    required: true
  },
  hum: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  }
}, {
  timestamps: true  // crea automáticamente createdAt y updatedAt
});

module.exports = mongoose.model('Telemetry', telemetrySchema);