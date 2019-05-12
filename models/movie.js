const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String },
  genre: { type: String },
  plot: {type: String },
});

// 'movies' refers to the collection in celebrities database
const Movie = mongoose.model('movies', movieSchema);
module.exports = Movie;