const axios = require("axios");

/**
 * Fetch cryptocurrency news articles based on the specified fromDate and apiKey.
 * @param {string} fromDate - The start date in the format 'YYYY-MM-DD' to search for articles from.
 * @param {string} apiKey - The API key required for accessing the news API.
 * @returns {Promise<object>} - A promise that resolves to the response data containing news articles.
 * @throws {Error} - Throws an error if there is an issue fetching the news data.
 */
const getNews = async (fromDate, apiKey) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=crypto&from=${fromDate}&sortBy=publishedAt&apiKey=${apiKey}&searchin=title,content`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching news data:", error.message);
    throw error;
  }
};

module.exports = {
  getNews,
};
