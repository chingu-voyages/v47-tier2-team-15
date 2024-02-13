const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const authRoutes = require('./routes/authRoute');
const currenciesRoute = require('./routes/currenciesRoute');
const globalRoute = require('./routes/globalRoute');
const profileRoute = require('./routes/profileRoute');
const favoritesRoutes = require('./routes/favoritesRoute');
const newsRoute = require('./routes/newsRoute');
const { errorHandler } = require('./middleware/errorMiddleware');
require('dotenv').config();

const app = express();

// CORS Configuration

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log('Database connected! WIIIIIIII'))
  .catch((err) => console.log(err));

const store = new MongoDBStore({
  uri: process.env.MONGO_CONNECTION,
  collection: 'sessions',
});

store.on('error', function (error) {
  console.error('Session store error:', error);
});

// Session Configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    // cookie: {
    //   maxAge: 1000 * 60 * 60 * 24 * 7,
    //   httpOnly: true,
    //   sameSite: 'none',
    //   secure: true,
    // },
  })
);
app.use(
  cors({
    origin: 'https://cryptoview-us13.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders:
      'Origin,X-Requested-With,Content-Type,Accept,Authorization, Set-Cookie, Cookie',
    exposedHeaders:
      'Access-Control-Allow-Origin,Access-Control-Allow-Credentials, Set-Cookie, Cookie',
  })
);
// Passport Configuration
require('./passport/passport-config');

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// JSON request parsing
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/api/currencies', currenciesRoute);
app.use('/api/global', globalRoute);
app.use('/api', profileRoute);
app.use('/api/favorites', favoritesRoutes);
app.use('/api/news', newsRoute);
app.use(errorHandler);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});