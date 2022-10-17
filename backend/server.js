import express from 'express';
import data from './data.js';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

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

// app.get('/api/refunds', (req, res) => {
//   res.send(data.refunds);
// });

// app.get('api/refund/slug/:slug', (req, res) {
//   const refund = data.refunds.find((x) => x.slug === req.params.slug)
//   if(refund){
//     res.send(refund)
//   } else{
//     res.status(404).send({message: 'Unable to cnnect'})
//   }
// })

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Ready for take off at http://localhost:${port}`);
});
