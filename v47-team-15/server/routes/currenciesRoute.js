// routes/currenciesRoute.js
const express = require('express');
const { getAllCurrencies } = require('../controllers/currenciesController');

const router = express.Router();

// Endpoint for getting all currencies max 100 results per request
// Endpoint URL: http://localhost:3001/api/currencies
// Pagination Parameters: start, limit

// Example API Requests:
// - First page: http://localhost:3001/api/currencies?start=0&limit=30
// - Second page: http://localhost:3001/api/currencies?start=30&limit=30
// - ...

// Please adjust the `start` parameter based on the current page and the `limit` parameter for the number of items per page.

// Let me know if you have any questions or need further clarification.
router.get('/', async (req, res) => {
  const { start = 0, limit = 100 } = req.query;

  try {
    const currencies = await getAllCurrencies(start, limit);
    res.json({ data: currencies });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
