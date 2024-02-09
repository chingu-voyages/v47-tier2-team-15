const mongoose = require('mongoose');

// import Currency in the file models/currency.js
const Currency = require('../models/currency');

const getCachedCurrencies = async (start = 0, limit = 100) => {
  try {
    // Assuming Currency is the Mongoose model for your collection
    const cachedCurrencies = await Currency.find()
      .skip(parseInt(start))
      .limit(parseInt(limit));

    return cachedCurrencies;
  } catch (error) {
    console.error('Error fetching cached currencies from MongoDB:', error.message);
    throw error;
  }
};
module.exports = {
  getCachedCurrencies,
};
