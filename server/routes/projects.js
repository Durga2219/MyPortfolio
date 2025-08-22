const express = require('express');
const { body, validationResult } = require('express-validator');
const Project = require('../models/Project');
const { auth, adminOnly } = require('../middleware/auth');

const router = express.Router();

// Public route - Get all active projects
router.get('/', async (req, res) => {
  try {
    const { category, featured } = req.query;
    let filter = { isActive: true };

    if (category && category !== 'All') {
      filter.category = category;
    }

    if (featured === 'true') {
      filter.featured = true;
    }

    const projects = await Project.find(filter)
      .sort({ createdAt: -1 });

    res.json(projects);
  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Public route - Get project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findOne({ 
      _id: req.params.id, 
      isActive: true 
    });

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    console.error('Get project error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin route - Create new project
router.post('/', [auth, adminOnly], [
  body('title').notEmpty().trim(),
  body('description').notEmpty().trim(),
  body('longDescription').notEmpty().trim(),
  body('image').notEmpty(),
  body('technologies').isArray({ min: 1 }),
  body('category').isIn(['Full Stack', 'Frontend', 'Backend', 'Mobile']),
  body('highlights').isArray({ min: 1 }),
  body('challenges').isArray({ min: 1 }),
  body('solutions').isArray({ min: 1 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation error', 
        errors: errors.array() 
      });
    }

    const project = new Project(req.body);
    await project.save();

    res.status(201).json({
      message: 'Project created successfully',
      project
    });
  } catch (error) {
    console.error('Create project error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin route - Update project
router.put('/:id', [auth, adminOnly], [
  body('title').optional().notEmpty().trim(),
  body('description').optional().notEmpty().trim(),
  body('longDescription').optional().notEmpty().trim(),
  body('image').optional().notEmpty(),
  body('technologies').optional().isArray({ min: 1 }),
  body('category').optional().isIn(['Full Stack', 'Frontend', 'Backend', 'Mobile']),
  body('highlights').optional().isArray({ min: 1 }),
  body('challenges').optional().isArray({ min: 1 }),
  body('solutions').optional().isArray({ min: 1 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation error', 
        errors: errors.array() 
      });
    }

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({
      message: 'Project updated successfully',
      project
    });
  } catch (error) {
    console.error('Update project error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin route - Delete project (soft delete)
router.delete('/:id', [auth, adminOnly], async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Delete project error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin route - Toggle featured status
router.patch('/:id/toggle-featured', [auth, adminOnly], async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    project.featured = !project.featured;
    await project.save();

    res.json({
      message: `Project ${project.featured ? 'featured' : 'unfeatured'} successfully`,
      project
    });
  } catch (error) {
    console.error('Toggle featured error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
















