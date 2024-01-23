const express = require('express');
const app = express();
const cors = require('cors');
const currenciesRoute = require('./routes/currenciesRoute');
const globalRoute = require('./routes/globalRoute');
const bodyParser = require('body-parser');

app.use(express.json());
const PORT = process.env.PORT || 3003;

app.use('/api/currencies', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());

app.use('/api/currencies', currenciesRoute);
app.use('/api/global', globalRoute);

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
