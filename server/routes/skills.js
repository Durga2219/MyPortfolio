const express = require('express');
const { body, validationResult } = require('express-validator');
const Skill = require('../models/Skill');
const { auth, adminOnly } = require('../middleware/auth');

const router = express.Router();

// Public route - Get all active skills
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    let filter = { isActive: true };

    if (category && category !== 'all') {
      filter.category = category;
    }

    const skills = await Skill.find(filter)
      .sort({ proficiency: -1, name: 1 });

    res.json(skills);
  } catch (error) {
    console.error('Get skills error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Public route - Get skill by ID
router.get('/:id', async (req, res) => {
  try {
    const skill = await Skill.findOne({ 
      _id: req.params.id, 
      isActive: true 
    });

    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.json(skill);
  } catch (error) {
    console.error('Get skill error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin route - Create new skill
router.post('/', [auth, adminOnly], [
  body('name').notEmpty().trim(),
  body('description').notEmpty().trim(),
  body('category').isIn(['Programming', 'Web Technologies', 'Databases', 'Tools & Platforms', 'Soft Skills']),
  body('proficiency').isInt({ min: 1, max: 100 }),
  body('icon').notEmpty(),
  body('relatedTechnologies').isArray()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation error', 
        errors: errors.array() 
      });
    }

    const skill = new Skill(req.body);
    await skill.save();

    res.status(201).json({
      message: 'Skill created successfully',
      skill
    });
  } catch (error) {
    console.error('Create skill error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin route - Update skill
router.put('/:id', [auth, adminOnly], [
  body('name').optional().notEmpty().trim(),
  body('description').optional().notEmpty().trim(),
  body('category').optional().isIn(['Programming', 'Web Technologies', 'Databases', 'Tools & Platforms', 'Soft Skills']),
  body('proficiency').optional().isInt({ min: 1, max: 100 }),
  body('icon').optional().notEmpty(),
  body('relatedTechnologies').optional().isArray()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation error', 
        errors: errors.array() 
      });
    }

    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.json({
      message: 'Skill updated successfully',
      skill
    });
  } catch (error) {
    console.error('Update skill error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin route - Delete skill (soft delete)
router.delete('/:id', [auth, adminOnly], async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    console.error('Delete skill error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
















