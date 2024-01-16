const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Hello, World!');
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
