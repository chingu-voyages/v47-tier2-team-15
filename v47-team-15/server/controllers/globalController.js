const axios = require("axios");

/**
 * Fetch global cryptocurrency market data from the CoinLore API.
 * @returns {Promise<object>} - A promise that resolves to the response data containing global market data.
 * @throws {Error} - Throws an error if there is an issue fetching the global data.
 */
const getGlobalData = async () => {
  try {
    const response = await axios.get("https://api.coinlore.net/api/global/");
    return response.data;
  } catch (error) {
    console.error("Error fetching global data:", error.message);
    throw error;
  }
};

module.exports = {
  getGlobalData,
};
