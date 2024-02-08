const express = require('express');
const cors = require('cors');
const path = require("path");
const currenciesRoute = require('./routes/currenciesRoute');
const globalRoute = require('./routes/globalRoute');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.static(path.join(__dirname, "dist")));

app.use(express.json());

app.use(cors({
  origin: 'https://65c4bca05f631d0ad181816b--jazzy-hotteok-614a27.netlify.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use('/api/currencies', currenciesRoute);
app.use('/api/global', globalRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
