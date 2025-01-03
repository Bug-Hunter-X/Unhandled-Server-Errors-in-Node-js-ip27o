const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;

server.on('error', (err) => {
  console.error('Server Error:', err);
  // Add more robust error handling here, such as logging to a file or notifying an external service
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});