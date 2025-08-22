const express = require('express');
const { body, validationResult } = require('express-validator');
const Certificate = require('../models/Certificate');
const { auth, adminOnly } = require('../middleware/auth');

const router = express.Router();

// Public route - Get all active certificates
router.get('/', async (req, res) => {
  try {
    const { category, featured } = req.query;
    let filter = { isActive: true };

    if (category && category !== 'all') {
      filter.category = category;
    }

    if (featured === 'true') {
      filter.featured = true;
    }

    const certificates = await Certificate.find(filter)
      .sort({ createdAt: -1 });

    res.json(certificates);
  } catch (error) {
    console.error('Get certificates error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Public route - Get certificate by ID
router.get('/:id', async (req, res) => {
  try {
    const certificate = await Certificate.findOne({ 
      _id: req.params.id, 
      isActive: true 
    });

    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }

    res.json(certificate);
  } catch (error) {
    console.error('Get certificate error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin route - Create new certificate
router.post('/', [auth, adminOnly], [
  body('title').notEmpty().trim(),
  body('issuer').notEmpty().trim(),
  body('date').notEmpty(),
  body('category').isIn(['cloud', 'frontend', 'backend', 'database', 'devops', 'general']),
  body('image').notEmpty(),
  body('url').notEmpty().isURL(),
  body('description').notEmpty().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation error', 
        errors: errors.array() 
      });
    }

    const certificate = new Certificate(req.body);
    await certificate.save();

    res.status(201).json({
      message: 'Certificate created successfully',
      certificate
    });
  } catch (error) {
    console.error('Create certificate error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin route - Update certificate
router.put('/:id', [auth, adminOnly], [
  body('title').optional().notEmpty().trim(),
  body('issuer').optional().notEmpty().trim(),
  body('date').optional().notEmpty(),
  body('category').optional().isIn(['cloud', 'frontend', 'backend', 'database', 'devops', 'general']),
  body('image').optional().notEmpty(),
  body('url').optional().notEmpty().isURL(),
  body('description').optional().notEmpty().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation error', 
        errors: errors.array() 
      });
    }

    const certificate = await Certificate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }

    res.json({
      message: 'Certificate updated successfully',
      certificate
    });
  } catch (error) {
    console.error('Update certificate error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin route - Delete certificate (soft delete)
router.delete('/:id', [auth, adminOnly], async (req, res) => {
  try {
    const certificate = await Certificate.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }

    res.json({ message: 'Certificate deleted successfully' });
  } catch (error) {
    console.error('Delete certificate error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin route - Toggle featured status
router.patch('/:id/toggle-featured', [auth, adminOnly], async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id);
    
    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }

    certificate.featured = !certificate.featured;
    await certificate.save();

    res.json({
      message: `Certificate ${certificate.featured ? 'featured' : 'unfeatured'} successfully`,
      certificate
    });
  } catch (error) {
    console.error('Toggle featured error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
















