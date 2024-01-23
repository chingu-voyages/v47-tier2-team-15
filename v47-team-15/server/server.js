const express = require('express');
const cors = require('cors');
const currenciesRoute = require('./routes/currenciesRoute');
const globalRoute = require('./routes/globalRoute');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use('/api/currencies', currenciesRoute);
app.use('/api/global', globalRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
