const axios = require("axios");

const getNews = async (query, fromDate, apiKey) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&from=${fromDate}&sortBy=publishedAt&apiKey=${apiKey}&searchin=title,content`
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
