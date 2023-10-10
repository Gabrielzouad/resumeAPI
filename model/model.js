const mongoose = require('mongoose');

/**
 * @typedef Recommendation
 * @property {string} name - The name of the person who wrote the recommendation.
 * @property {string} company - The company where the person who wrote the recommendation works.
 * @property {string} text - The text of the recommendation.
 * @property {Date} date - The date when the recommendation was created.
 */

const recommendationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Recommendation = mongoose.model('Recommendation', recommendationSchema);

module.exports = Recommendation;
