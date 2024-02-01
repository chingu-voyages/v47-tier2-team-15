const axios = require('axios');

const getGlobalData = async () => {
  try {
    const response = await axios.get('https://api.coinlore.net/api/global/');
    return response.data;
  } catch (error) {
    console.error('Error fetching global data:', error.message);
    throw error;
  }
};

module.exports = {
  getGlobalData,
};
