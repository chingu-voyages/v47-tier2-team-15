// const User = require('../models/user');

// exports.getProfile = (req, res) => {
//   const { username, email } = req.user;

//   // Log the user data for debugging purposes
//   console.log('User Data:', { username, email });

//   // Send the user data as JSON response
//   res.json({ username, email });
// };

const axios = require('axios');

const getCoinDetails = async (coinIds) => {
  try {
    const response = await axios.get(
      `https://api.coinlore.net/api/ticker/?id=${coinIds}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching coin details:', error);
    throw new Error('Failed to fetch coin details');
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = req.user;

    console.log('User Data:', { username: user.username, email: user.email });

    const favoriteCoinsDetails = await getCoinDetails(
      user.favoriteCoinIds.join(',')
    );

    res.json({
      username: user.username,
      email: user.email,
      _id: user._id,
      favoriteCoinsDetails,
    });
  } catch (error) {
    console.error('Error fetching profile data:', error);
    res.status(500).json({ message: 'Failed to fetch profile data' });
  }
};
