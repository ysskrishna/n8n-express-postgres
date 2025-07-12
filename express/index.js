const express = require('express');
const itemsRouter = require('./routes/items');
const app = express();

app.use(express.json());

app.use('/items', itemsRouter);

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to ysskrishna Express API' });
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
