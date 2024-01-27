const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoute');
const currenciesRoute = require('./routes/currenciesRoute');
const globalRoute = require('./routes/globalRoute');
require('dotenv').config();

const app = express();

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log('Database connected! WIIIIIIII'))
  .catch((err) => console.log(err));

require('./passport/passport-config');

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// JSON request parsing
app.use(express.json());

// CORS
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

// Routes
app.use('/auth', authRoutes);
app.use('/api/currencies', currenciesRoute);
app.use('/api/global', globalRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server  running on http://localhost:${PORT}`);
});
