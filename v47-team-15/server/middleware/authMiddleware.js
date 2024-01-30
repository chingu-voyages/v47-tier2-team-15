// // authMiddleware.js
// module.exports.ensureAuthenticated = function (req, res, next) {
//   console.log('Inside ensureAuthenticated middleware'); // Log for debugging
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect('/login'); // Redirect to login if not authenticated
// };

// // authMiddleware.js
// module.exports.ensureAuthenticated = function (req, res, next) {
//   console.log('Inside ensureAuthenticated middleware'); // Log for debugging
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   // No redirection here
//   next();
// };
// authMiddleware.js
module.exports.ensureAuthenticated = function (req, res, next) {
  console.log('Inside ensureAuthenticated middleware');

  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    return next();
  }

  // If not authenticated, handle accordingly
  // For example, you can redirect to a login page or send a 401 Unauthorized response
  res.status(401).send('Unauthorized');
};
