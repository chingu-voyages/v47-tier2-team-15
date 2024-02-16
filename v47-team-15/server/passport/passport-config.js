const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');

/**
 * Configure Passport to use a local strategy for authentication.
 * @param {Object} options - Options for the local strategy.
 * @param {string} options.usernameField - The field name for the username (email in this case).
 * @param {Function} verifyCallback - The verification callback function.
 */
passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        //Troubleshooting
        // console.log("Entered Email:", email);
        // console.log("Entered Password:", password);
        // console.log("Hashed Password from DB:", user.password);
        // console.log("Password Comparison Result:", isPasswordValid);

        if (!isPasswordValid) {
          return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

/**
 * Serialize user object into session.
 * @param {Object} user - The user object to be serialized.
 * @param {Function} done - Callback function to indicate completion.
 */
passport.serializeUser((user, done) => {
  console.log('Serializing user:', user);
  done(null, user.id);
});

/**
 * Deserialize user object from session.
 * @param {string} id - The user ID retrieved from session.
 * @param {Function} done - Callback function to indicate completion.
 */

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    console.log('Deserializing user:', user);
    done(null, user);
  } catch (error) {
    console.error('Deserialization error:', error.message);
    done(error);
  }
});

module.exports = passport;
