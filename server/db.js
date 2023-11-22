const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://pradeep:pradeep@flavorsoferodecluster.tqyrjpa.mongodb.net/flavorsoferode?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB: ', error);
  });