const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/authMiddleware');
const favoritesController = require('../controllers/favoritesController');

router.post('/add', ensureAuthenticated, favoritesController.addFavoriteCoin);

router.post(
  '/remove',
  ensureAuthenticated,
  favoritesController.removeFavoriteCoin
);

module.exports = router;
