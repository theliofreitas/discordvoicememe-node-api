// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const app = express();
require("dotenv").config();

// Import dotenv variables
const URI = process.env.MONGODB_URI;

// Import API routes
const memeAudioRoutes = require('./routes/memeAudioRoutes');
app.use('/memeAudios', memeAudioRoutes);

// Express setup
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Discord Voice Meme API!');
});

// Connect MongoDB
mongoose.connect(URI)
  .then(() => {
    console.log('MongoDB connected!');
    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => console.log(err));
