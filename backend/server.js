import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/games', (req, res) => {
  res.send(data.games);
});

app.get('/api/games/slug/:slug', (req, res) => {
  const game = data.games.find((x) => x.slug === req.params.slug);
  if (game) {
    res.send(game);
  } else {
    res.status(404).send({ message: 'Game Not Found' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Ready for take off at http://localhost:${port}`);
});
