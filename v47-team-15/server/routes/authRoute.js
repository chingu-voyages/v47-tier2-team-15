//login, logout and registration routes for the user
const express = require('express');
const {
  registerUser,
  loginUser,
  logoutUser,
} = require('../controllers/authController');

const router = express.Router();

// Endpoint for user registration
router.post('/register', registerUser);

// Endpoint for user login
router.post('/login', loginUser);

// Endpoint for user logout
router.post('/logout', logoutUser);

module.exports = router;
