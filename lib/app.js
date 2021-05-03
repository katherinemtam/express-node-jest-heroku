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

// API routes for cats
app.get('/api/creatures', (req, res) => {
  res.json(creatures);
});

export default app;