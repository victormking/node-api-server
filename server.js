const http = require('http');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

const server = http.createServer((req, res) => {
  if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data, null, 2)); // Pretty-printed output
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
