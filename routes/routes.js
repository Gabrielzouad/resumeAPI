const express = require('express');
const Recommendation = require('../model/model');

const router = express.Router();

module.exports = router;

// POST request that takes in the new model for recommendations
router.post('/recommendations', async (req, res) => {
  try {
    const recommendation = new Recommendation(req.body);
    const existingRecommendation = await Recommendation.findOne({
      name: req.body.name,
    });
    // Check if recommendation with same name already exists
    if (existingRecommendation) {
      res.status(400).send('Recommendation with same name already exists');
    } else {
      await recommendation.save();
      res.send(recommendation);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

//Get all Method
router.get('/getAll', (req, res) => {
  res.send('Get All API');
});
