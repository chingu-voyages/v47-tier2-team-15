const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../middleware/authMiddleware");

const profileController = require("../controllers/profileController");

// Protected route - only accessible to authenticated users
/**
 * GET endpoint to retrieve user profile information.
 * @route GET /profile
 * @group Profile - Operations related to user profile
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {void}
 * @security JWT
 */
router.get("/", ensureAuthenticated, profileController.getProfile);

module.exports = router;
