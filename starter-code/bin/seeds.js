// Iteration #1
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/drones-dev');
const Drone = require('../models/drone');
const drones = [
  {
    droneName: 'Fred',
    propellers: 4,
    maxSpeed: 25
  },
  {
    droneName: 'Brad',
    propellers: 6,
    maxSpeed: 40
  },
  {
    droneName: 'Chad',
    propellers: 8,
    maxSpeed: 60
  }
];

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((drone) => {
    console.log(drone.droneName)
  });
  mongoose.connection.close();
})
