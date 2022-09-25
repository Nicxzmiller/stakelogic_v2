import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/games', (req, res) => {
  res.send(data.games);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Ready for take off at http://localhost:${port}`);
});
