const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  issuer: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['cloud', 'frontend', 'backend', 'database', 'devops', 'general'],
    default: 'general'
  },
  image: {
    type: String,
    required: true
  },
  credentialId: {
    type: String,
    default: '—'
  },
  url: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for better query performance
certificateSchema.index({ category: 1, featured: 1, isActive: 1 });

module.exports = mongoose.model('Certificate', certificateSchema);










