require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');

// Connect to MongoDB
mongoose
  .connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use('/api', routes);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
