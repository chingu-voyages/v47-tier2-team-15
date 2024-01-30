const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/authMiddleware');

const profileController = require('../controllers/profileController');

// Protected route - only accessible to authenticated users
router.get('/', ensureAuthenticated, profileController.getProfile);

module.exports = router;
