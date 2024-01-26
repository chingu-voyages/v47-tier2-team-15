const passport = require('passport');
const User = require('../models/user');
const uuid = require('uuid');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const passwordComplexityOptions = {
  min: 8,
  max: 30,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
};
exports.registerUser = async (req, res, next) => {
  try {
    const { username, email, password, confirmPassword} = req.body;
    
    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    const passwordValidationResult = passwordComplexity(
      passwordComplexityOptions
    ).validate(password, { abortEarly: false });

    if (passwordValidationResult.error) {
      return res.status(400).json({
        error: 'Invalid password format',
        details: passwordValidationResult.error.details,
      });
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);
    newUser.password = hashedPassword;

    await newUser.save();

    newUser.userId = uuid.v4();
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error.message);

    // Handle specific error types
    if (error.code === 11000) {
      // Duplicate key error (E11000)
      res.status(409).json({ error: 'Email already registered' });
    } else {
      // Other errors
      res.status(500).json({ error: 'Internal Server Error' });
    }
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
