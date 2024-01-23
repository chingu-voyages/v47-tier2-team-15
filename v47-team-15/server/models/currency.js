//Currency.js file defining the currencySchema. 
//This is where we define the structure of our data and interact with the database 
//As a fallback for the all currency data

const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
   name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
  price_usd: {
    type: Number,
    required: true,
  },
  percent_change_24h: {
    type: Number,
  },
  percent_change_1h: {
    type: Number,
  },
  percent_change_7d: {
    type: Number,
  },
  price_btc: {
    type: Number,
  },
  volume24: {
    type: Number,
  },
  csupply: {
    type: String, // Assuming csupply is a string, update as needed
  },
  tsupply: {
    type: String,
  },
  market_cap_usd: {
    type: Number,
  },
});

const Currency = mongoose.model('Currency', currencySchema);

module.exports = Currency;
