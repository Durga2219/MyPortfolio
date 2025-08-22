const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  technologies: [{
    type: String,
    trim: true
  }],
  category: {
    type: String,
    required: true,
    enum: ['Full Stack', 'Frontend', 'Backend', 'Mobile'],
    default: 'Frontend'
  },
  featured: {
    type: Boolean,
    default: false
  },
  liveUrl: {
    type: String
  },
  githubUrl: {
    type: String
  },
  demoUrl: {
    type: String
  },
  highlights: [{
    type: String
  }],
  challenges: [{
    type: String
  }],
  solutions: [{
    type: String
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for better query performance
projectSchema.index({ category: 1, featured: 1, isActive: 1 });

module.exports = mongoose.model('Project', projectSchema);










