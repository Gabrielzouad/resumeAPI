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

// GET request to retrieve all recommendations
router.get('/recommendations', async (req, res) => {
  try {
    const recommendations = await Recommendation.find();
    res.send(recommendations);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET request to retrieve a recommendation by name
router.get('/recommendations/:name', async (req, res) => {
  try {
    const recommendation = await Recommendation.findOne({
      name: req.params.name,
    });
    if (!recommendation) {
      res.status(404).send('Recommendation not found');
    } else {
      res.send(recommendation);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST request that takes in the new model for projects
router.post('/projects', async (req, res) => {
  try {
    const project = new Project(req.body);
    const existingProject = await Project.findOne({
      name: req.body.name,
    });
    // Check if project with same name already exists
    if (existingProject) {
      res.status(400).send('Project with same name already exists');
    } else {
      await project.save();
      res.send(project);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET request to retrieve all projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.send(projects);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET request to retrieve a project by name
router.get('/projects/:name', async (req, res) => {
  try {
    const project = await Project.findOne({
      name: req.params.name,
    });
    if (!project) {
      res.status(404).send('Project not found');
    } else {
      res.send(project);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST request that takes in the new model for technologies
