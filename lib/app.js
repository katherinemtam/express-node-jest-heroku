// import dependencies
import express from 'express';
import cors from 'cors';
import creatures from '../data/data';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());

// example route to see if app is alive!
app.get('/', (req, res) => {
  // send back a short response
  res.send('*Ping* *ping*');
});

// API routes for creatures
app.get('/api/creatures', (req, res) => {
  res.json(creatures);
});

// API routes for creatures id
app.get('/api/creatures/:id', (req, res) => {
  res.json(creatures[0]);
});

export default app;