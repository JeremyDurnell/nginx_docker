'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello app1\n');
});

app.get('*', (req, res) => {
    res.send('app1 catch all\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);