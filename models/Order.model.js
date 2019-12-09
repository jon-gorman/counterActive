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
  item_department: {
    type: String,

  },
  item_added: {
    type: String,

  },
  item_weight: {
    type: Number,

  },
},
{
  collection: 'order'
});

module.exports = mongoose.model('Order', Order);
