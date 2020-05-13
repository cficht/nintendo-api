const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/reports', require('./routes/reports'));
app.use('/api/v1/runs', require('./routes/runs'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
