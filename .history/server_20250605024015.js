const http = require('http');

const data = [
  { id: 1, name: 'Mr King', role: 'Data Analyst' },
  { id: 2, name: 'Jane Doe', role: 'Web Developer' },
];

const server = http.createServer((req, res) => {
  if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
