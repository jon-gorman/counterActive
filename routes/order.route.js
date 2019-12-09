const express = require('express');
const orderRoutes = express.Router();

//Require the model in routes model
let Order = require('../models/order.model');

//Define route
orderRoutes.route('/add').post(function(req, res){
  let order = new Order(req.body);
  order.save()
    .then(function (order) {
      res.status(200).json({
        'order': 'order added successfully'
      })
    })
    .catch(function(err){
      res.status(400).send('unable to save to database');
  });
});

module.exports = orderRoutes;