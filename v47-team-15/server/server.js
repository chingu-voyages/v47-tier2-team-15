const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const authRoutes = require("./routes/authRoute");
const currenciesRoute = require("./routes/currenciesRoute");
const globalRoute = require("./routes/globalRoute");
const profileRoute = require("./routes/profileRoute");
const favoritesRoutes = require("./routes/favoritesRoute");
const newsRoute = require("./routes/newsRoute");
const { errorHandler } = require("./middleware/errorMiddleware");
require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.use(express.json());

app.use(cors({
  origin: 'https://65c4bca05f631d0ad181816b--jazzy-hotteok-614a27.netlify.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
  exposedHeaders: 'Access-Control-Allow-Origin,Access-Control-Allow-Credentials',
}));

app.use(errorHandler);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
