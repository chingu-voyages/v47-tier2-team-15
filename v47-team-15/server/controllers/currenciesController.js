const axios = require("axios");

/**
 *Fetch a list of currencies from the CoinLore API.
  @param {number} start - The starting index of the currencies to fetch (default: 0).
 * @param {number} limit - The maximum number of currencies to fetch (default: 100).
 * @returns {Array} - An array of currency data objects.
 * @throws {Error} - Throws an error if there is an issue fetching the coin details.
 */

const getAllCurrencies = async (start = 0, limit = 100) => {
  try {
    const response = await axios.get(
      `https://api.coinlore.net/api/tickers/?start=${start}&limit=${limit}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data from CoinLore API:", error.message);
    throw error;
  }
};

module.exports = {
  getAllCurrencies,
};
