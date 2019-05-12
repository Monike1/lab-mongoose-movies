const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const Celebrity = require('../models/celebrity');


// to show a form to add a new celebrity
router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new');
});


// to delete a celebrity
router.post('/celebrities/:celebId/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove({_id: mongoose.Types.ObjectId(req.params.celebId)}, (err) => {
    if (err) { 
      return next(err);
    } 
    res.redirect('/celebrities');
    
  });
});

// to render celebrity edit page
router.get('/celebrities/:celebId/edit', (req, res, next) => {
  Celebrity.findById({_id: mongoose.Types.ObjectId(req.params.celebId)}, (err, result) => {
    if (err) { 
      return next(err);
    } 
    res.render('celebrities/edit', {
      celebrities: result
    });
  });
});

// to get changes from edit form and post them to celebrity detail page
router.post('/celebrities/:celebId', (req, res, next) => {
  const celebrityObject = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.findByIdAndUpdate({_id: mongoose.Types.ObjectId(req.params.celebId)}, celebrityObject, (err) => {
    if (err) { 
      return next(err);
    } else {
      res.redirect('/celebrities');
    }
  });
});

// to show celebrity detail page
router.get('/celebrities/:celebId', (req, res) => {
  Celebrity.find({_id: mongoose.Types.ObjectId(req.params.celebId)}, (err, result) => {
    if (err) { 
      return err;
    } else {
      res.render('celebrities/show', {celebrities: result});
    }
  });
});

// to show the list of celebrities 
router.get('/celebrities/', (req, res) => {
  Celebrity.find({}, (err, result) => {
    if (err) { 
      return err;
    } else {
      res.render('celebrities/index', {
          celebrities: result
        });
    }
  });
});

// to post a new celebrity details from the form
router.post('/celebrities', (req, res) => {
  const newCelebrityObject = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  const newCelebrity = new Celebrity(newCelebrityObject);
  console.log(newCelebrity);

  newCelebrity.save((err) => {
    if (err) {
      res.render('celebrity/new')
    } else {
      res.redirect('celebrities');
    }
  });
});

module.exports = router;