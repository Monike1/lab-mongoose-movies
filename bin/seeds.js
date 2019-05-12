const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrities', { useNewUrlParser: true });
// const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

// const celebrities = [
//   {
//     name: 'Tom Cruise',
//     occupation: 'Actor',
//     catchPhrase: 'Show me the money!'
//   },
//   {
//     name: 'Angelina Jolie',
//     occupation: 'Actress',
//     catchPhrase: 'Nothing would mean anything if I didn\'t live a live of use to others.'
//   },
//   {
//     name: 'Brad Pitt',
//     occupation: 'Actor',
//     catchPhrase: 'My theory is, be the shark. You\'ve just got to keep moving. You can\'t stop.'
//   },
//   {
//     name: 'Jennifer Lawrence',
//     occupation: 'Actress',
//     catchPhrase: '"Don\'t worry about the bitches" - that could be a good motto because you come across people like that throughout your life.'
//   }
// ];

// Celebrity.create(celebrities, (err, docs) => {
//   if (err) {
//     throw err;
//   }

//   docs.forEach((celebrity) => {
//     console.log(celebrity.name)
//   });
//   mongoose.connection.close();
// });

//Run the seed file with node to seed your database.

const movies = [
  {
    title: 'Top Gun',
    genre: 'Action',
    plot: 'Despite his dislike for Maverick\'s recklessness, CAG "Stinger" sends him and Goose to attend Topgun, the Naval Fighter Weapons School at Naval Air Station Miramar. At a bar the day before Topgun starts, Maverick, assisted by Goose, unsuccessfully approaches a woman.'
  },
  {
    title: 'Mr. & Mrs. Smith',
    genre: 'Action',
    plot: 'A bored married couple is surprised to learn that they are both assassins hired by competing agencies to kill each other.'
  },
  {
    title: 'Ocean\'s Eleven',
    genre: 'Crime/Triller',
    plot: 'Danny Ocean and his eleven accomplices plan to rob three Las Vegas casinos.'
  },
  {
    title: 'The Book of Eli',
    genre: 'Post-apocalyptic tale',
    plot: 'According to Eli, his book is the last remaining copy of the Bible, as all other copies were intentionally destroyed following the nuclear war thirty years ago. He says that he was led to the book by a voice in his head, which then directed him to travel westward to a place where it would be safe.'
  },
  {
    title: 'Passengers',
    genre: 'Science fiction',
    plot: 'A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.'
  }
];

Movie.create(movies, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((movie) => {
    console.log(movie.name)
  });
  mongoose.connection.close();
});

//Run the seed file with node to seed your database.