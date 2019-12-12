const express = require('express');
const orderRoutes = express.Router();

//Require the model in routes model
let Order = require('../models/order.model');

//Define Create route
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
// //Define Completed route
// orderRoutes.route('/completed').post(function(req, res){
//   let order = new Order(req.body);
//   order.save()
//     .then(function (order) {
//       res.status(200).json({
//         'order': 'order added successfully'
//       })
//     })
//     .catch(function(err){
//       res.status(400).send('unable to save to database');
//     });
// });

//Define the GET route
orderRoutes.route('/').get(function(req, res){
  Order.find(function(err, orders){
    if(err){
      console.log(err);
    }
    else {
      res.json(orders)
    }
  })
});

// Defined Edit route
orderRoutes.route('/edit/:id').get(function(req, res){
  let id = req.params.id;
  Order.findById(id, function(err, order){
    res.json(order)
  })
});

// Define Updated route
orderRoutes.route('/update/:id').post(function(req, res){
  Order.findById(req.params.id, function(err, order){
    if(!order)
      res.status(404).send("data is not found");
    else {
      order.date = req.body.date;
      order.person_name = req.body.person_name;
      order.item_department = req.body.item_department;
      order.counter_person_name = req.body.counter_person_name;
      order.item_available = req.body.item_available;
      order.item_added = req.body.item_added;
      order.item_weight = req.body.item_weight;
      order.item_actual = req.body.item_actual;
      order.item_notes = req.body.item_notes;
      order.save().then(function(order){
        res.json('Update complete');
      })
        .catch(function (err) {
          res.status(400).send("Unable to update the database");
        })
    }
  })
});

//Define completed route
// orderRoutes.route('/completed/:id').post(function(req, res){
//   Order.findById(req.params.id, function(err, order){
//     if(!order)
//       res.status(404).send("data is not found");
//     else {
//       order.date = req.body.date;
//       order.counter_person_name = req.body.counter_person_name;
//       order.person_name = req.body.person_name;
//       order.item_department = req.body.item_department;
//       order.item_added = req.body.item_added;
//       order.item_weight = req.body.item_weight;
//       order.item_actual = req.body.item_actual;
//       order.save().then(function(order){
//         res.json('Update complete');
//       })
//         .catch(function (err) {
//           res.status(400).send("Unable to update the database");
//         })
//     }
//   })
// });

//Define delete route
orderRoutes.route('/delete/:id').get(function(req, res){
  Order.findByIdAndRemove({_id: req.params.id}, function(err, order){
    if(err) res.json(err);
    else res.json('Successfully removed')
  })
});



module.exports = orderRoutes;