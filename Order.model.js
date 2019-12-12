const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for Orders
let Order = new Schema({
  date: {
    type: Date,
    default: Date.now
  },

  person_name: {
    type: String,
  },
  counter_person_name:{
    type: String,
  },
  item_department: {
    type: String,
  },
  item_added: {
    type: String,

  },
  item_weight: {
    type: Number,

  },
  item_actual:{
    type: Number,
  },
  item_notes:{
    type: String,
  },
  item_available:{
    type: String,
  }
},
{
  collection: 'order'
});

module.exports = mongoose.model('Order', Order);
