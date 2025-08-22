const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Programming', 'Web Technologies', 'Databases', 'Tools & Platforms', 'Soft Skills'],
    default: 'Programming'
  },
  proficiency: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
    default: 50
  },
  icon: {
    type: String,
    required: true
  },
  relatedTechnologies: [{
    type: String,
    trim: true
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for better query performance
skillSchema.index({ category: 1, proficiency: -1, isActive: 1 });

module.exports = mongoose.model('Skill', skillSchema);










