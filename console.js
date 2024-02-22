const express = require('express');
const axios = require('axios')

const app = express();
const PORT = 3000;


app.use('/', async (req, res) => {
    try {
        const response = await axios.get('https://example.com' + req.url);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Proxy request failed');
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
