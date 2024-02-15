const passport = require('passport');
const User = require('../models/user');
const passwordComplexity = require('joi-password-complexity');
const passwordComplexityOptions = {
  min: 8,
  max: 30,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
};

function isValidFormat(input, type) {
  if (type === 'username') {
    const regex = /^[a-zA-Z0-9]{3,8}$/;
    return regex.test(input);
  } else if (type === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  }
  return false;
}
/**
 * Register a new user.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The next middleware function.
 * @returns {Promise<void>} - A promise that resolves once the user is registered and logged in successfully.
 */
exports.registerUser = async (req, res, next) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (
      !isValidFormat(username, 'username') ||
      !isValidFormat(email, 'email')
    ) {
      return res.status(400).json({
        error:
          'Invalid username or email format. Username must have 3 to 8 alphanumeric characters. Email must be in a valid format.',
      });
    }
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(409).json({ error: 'Username already taken' });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ error: 'Email already registered' });
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
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }
    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    // Automatically log in the user after successful registration
    req.login(newUser, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      res.status(201).json({
        message: `User ${newUser.username} registered and logged in successfully`,
        user: {
          _id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        },
      });
    });
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/**
 * Log in a user.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The next middleware function.
 */
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

      const { _id, username, email } = user;
      console.log('User logged in');
      res.status(200).json({
        message: 'Login successful',
        user: {
          _id,
          username,
          email,
        },
      });
    });
  })(req, res, next);
};

/**
 * Log out a user.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The next middleware function.
 */
exports.logoutUser = (req, res, next) => {
  const { username, email, _id } = req.user || {};

  req.logout((err) => {
    if (err) {
      return next(err);
    }
    console.log('User logged out');
    res.status(200).json({
      message: 'Logout successful',
      user: {
        _id,
        username,
        email,
      },
    });
  });
};
