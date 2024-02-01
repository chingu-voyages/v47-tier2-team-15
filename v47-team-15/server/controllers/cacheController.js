const mongoose = require('mongoose');

// import Currency in the file models/currency.js
const Currency = require('../models/currency');

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


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
