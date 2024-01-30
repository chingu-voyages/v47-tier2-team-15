// // profileController.js
// const User = require('../models/user');

// exports.getProfile = (req, res) => {
//   const { username, email } = req.user;

//   // Log the user data for debugging purposes
//   console.log('User Data:', { username, email });

//   // Render the profile page with user information
//   res.render('profile', { username, email });
// };

const User = require('../models/user');

exports.getProfile = (req, res) => {
  const { username, email } = req.user;

  // Log the user data for debugging purposes
  console.log('User Data:', { username, email });

  // Send the user data as JSON response
  res.json({ username, email });
};
