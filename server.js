const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || '4002';
const cors = require('cors');
const mongoose =  require('mongoose');
const path = require('path')
const orderRoute = require('./routes/order.route');


const app = express();
app.use(bodyParser.json());

//Mongoose
mongoose.Promise = global.Promise;
const db = require('./config/database').mongoURI;
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function() {
  console.log('Mongodb Connected', typeof db )
}).catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));


//Use routes
app.use('/order', orderRoute);

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
//must be set like this so that it reloads with heroku deploy!!!
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/client/build/index.html'));
  });
}


app.listen(PORT, function(){
  console.log(`Server is listening on Port: ${PORT}`)
});