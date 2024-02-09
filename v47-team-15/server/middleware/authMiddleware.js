module.exports.ensureAuthenticated = function (req, res, next) {
  console.log('Inside ensureAuthenticated middleware');

  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    return next();
  }

  // Log information about the unauthorized request
  console.error(`Unauthorized access: ${req.method} ${req.originalUrl}`);

  // Send a JSON response with an error message
  res
    .status(401)
    .json({ error: 'Unauthorized', message: 'User not authenticated' });
};
