const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const Movie = require('../models/movie');

// to show a form to add a new movie
router.get('/movies/new', (req, res) => {
  res.render('movies/new');
});

// to delete a movie
router.post('/movies/:movieId/delete', (req, res, next) => {
  Movie.findByIdAndRemove({_id: mongoose.Types.ObjectId(req.params.movieId)}, (err) => {
    if (err) { 
      return next(err);
    } 
    res.redirect('/movies');
    
  });
});

// to render movie edit page
router.get('/movies/:movieId/edit', (req, res, next) => {
  Movie.findById({_id: mongoose.Types.ObjectId(req.params.movieId)}, (err, result) => {
    if (err) { 
      return next(err);
    } 
    res.render('movies/edit', {
      movies: result
    });
  });
});

// to get changes from edit form and post them to celebrity detail page
router.post('/movies/:movieId', (req, res, next) => {
  const movieObject = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  Movie.findByIdAndUpdate({_id: mongoose.Types.ObjectId(req.params.movieId)}, movieObject, (err) => {
    if (err) { 
      return next(err);
    } else {
      res.redirect('/movies');
    }
  });
});

// to show movie detail page
router.get('/movies/:movieId', (req, res) => {
  Movie.find({_id: mongoose.Types.ObjectId(req.params.movieId)}, (err, result) => {
    if (err) { 
      return err;
    } else {
      res.render('movies/show', {movies: result});
    }
  });
});

// to show the list of movies 
router.get('/movies/', (req, res) => {
  Movie.find({}, (err, result) => {
    if (err) { 
      return err;
    } else {
      res.render('movies/index', {
        movies: result
      });
    }
  });
});

// to post a new movie details from the form
router.post('/movies', (req, res) => {
  const newMovieObject = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  const newMovie = new Movie(newMovieObject);
  console.log(newMovie);

  newMovie.save((err) => {
    if (err) {
      res.render('movie/new')
    } else {
      res.redirect('movies');
    }
  });
});

module.exports = router;