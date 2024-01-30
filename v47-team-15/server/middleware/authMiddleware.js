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

module.exports.ensureAuthenticated = function (req, res, next) {
  console.log('Inside ensureAuthenticated middleware');

  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).send('Unauthorized');
};
