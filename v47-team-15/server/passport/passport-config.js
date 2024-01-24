const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');

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
        console.log('Entered Email:', email);
        console.log('Entered Password:', password);
        console.log('Hashed Password from DB:', user.password);
        console.log('Password Comparison Result:', isPasswordValid);

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

passport.serializeUser((user, done) => {
  console.log('Serializing user:', user);
  done(null, user.id);
});

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
