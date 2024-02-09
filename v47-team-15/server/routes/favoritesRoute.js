const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../middleware/authMiddleware");
const favoritesController = require("../controllers/favoritesController");

/**
 * POST endpoint to add a coin to the user's list of favorite coins.
 * @route POST /favorites/add
 * @group Favorites - Operations related to favorite coins
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {void}
 * @security Passport
 */
router.post("/add", ensureAuthenticated, favoritesController.addFavoriteCoin);

/**
 * POST endpoint to remove a coin from the user's list of favorite coins.
 * @route POST /favorites/remove
 * @group Favorites - Operations related to favorite coins
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {void}
 * @security JWT
 */
router.post(
  "/remove",
  ensureAuthenticated,
  favoritesController.removeFavoriteCoin
);

module.exports = router;
