const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');

const app = express();
mongoose.connect(config.database, {useMongoClient: true}, err => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to the database');
    }
  });


  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('dev'));
  app.use(cors());
  
  const userRoutes = require('./routes/account');
  
  app.use('/api/accounts', userRoutes);

//app.get('/', (req, res, next) => {
//    res.json({
//        "user" : "Hau Trung Nguyen"
//    });
//})


app.listen(config.port, err => {

    console.log('Magic happen on port 3030');
});