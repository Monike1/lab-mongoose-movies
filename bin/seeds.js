const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrities', { useNewUrlParser: true });
const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'Show me the money!'
  },
  {
    name: 'Angelina Jolie',
    occupation: 'Actress',
    catchPhrase: 'Nothing would mean anything if I didn\'t live a live of use to others.'
  },
  {
    name: 'Brad Pitt',
    occupation: 'Actor',
    catchPhrase: 'My theory is, be the shark. You\'ve just got to keep moving. You can\'t stop.'
  },
  {
    name: 'Jennifer Lawrence',
    occupation: 'Actress',
    catchPhrase: '"Don\'t worry about the bitches" - that could be a good motto because you come across people like that throughout your life.'
  }
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.name)
  });
  mongoose.connection.close();
});

//Run the seed file with node to seed your database.