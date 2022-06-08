const router = require('express').Router();

// Import object model
const MemeAudio = require('../models/MemeAudio');

// GET: /memeAudios
router.get('/', async (req, res) => {
  try {
    const memeAudios = await MemeAudio.find();

    res.status(200).json(memeAudios);
  }
  catch (err) {
    res.status(500).json({ error: error })
  }
});

module.exports = router;