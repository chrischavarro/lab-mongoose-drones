var express = require('express');
const Drone = require('../models/drone');

var router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) { return next(err) }

    res.render('drones/index', {
      drones: drones
    });
  });
});

router.get('/drones/new', (req, res, next) => {
  res.render('drones/new')
});

router.post('/drones', (req, res, next) => {
  const droneInfo = {
    droneName: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }

  const newDrone = new Drone(droneInfo)
  newDrone.save((err) => {
    if (err) {
      return render('products/new', { errors: newDrone.errors });
    }
    return res.redirect('/drones')
  });
});

module.exports = router;
