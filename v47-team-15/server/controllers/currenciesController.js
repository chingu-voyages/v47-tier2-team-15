const axios = require('axios');

const getAllCurrencies = async (start = 0, limit = 100) => {
  try {
    const response = await axios.get(
      `https://api.coinlore.net/api/tickers/?start=${start}&limit=${limit}`
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching data from CoinLore API:', error.message);
    throw error;
  }
};

module.exports = {
  getAllCurrencies,
};
