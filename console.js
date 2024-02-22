const express = require('express');
const app = express();
const port = 3000;

app.use('/', (req, res) => {
  const targetUrl = 'http://example.com'; // Ganti dengan URL target yang ingin Anda proxy
  const { method, url, headers } = req;

  const options = {
    method,
    headers,
  };

  fetch(targetUrl + url, options)
    .then(response => response.text())
    .then(data => res.send(data))
    .catch(error => res.status(500).send('Something went wrong'));
});

app.listen(port, () => {
  console.log(`Proxy server is running at http://localhost:${port}`);
});
