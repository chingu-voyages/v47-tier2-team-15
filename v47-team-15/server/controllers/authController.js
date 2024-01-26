const passport = require('passport');
const User = require('../models/user');
const uuid = require('uuid');

exports.registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    newUser.userId = uuid.v4();
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.loginUser = (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (!user) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // Redirect to user profile or send a response as needed
      // Example: res.redirect('/dashboard');
      return res.status(200).json({ message: 'Login successful' });
    });
  })(req, res, next);
};

exports.logoutUser = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    // Redirect or send a response as needed
    res.status(200).json({ message: 'Logout successful' });
  });
};
