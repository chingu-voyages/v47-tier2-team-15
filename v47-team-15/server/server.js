const express = require('express');
const currenciesRoute = require('./routes/currenciesRoute');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/api/currencies', currenciesRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
