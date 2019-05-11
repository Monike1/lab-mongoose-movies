const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const Celebrity = require('../models/celebrity');

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new');
});

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

router.post('/celebrities/:celebId/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove({_id: mongoose.Types.ObjectId(req.params.celebId)}, (err) => {
    if (err) { 
      return next(err);
    } 
    res.redirect('/celebrities');
    
  });
});

router.get('/celebrities/:celebId', (req, res) => {
  Celebrity.find({_id: mongoose.Types.ObjectId(req.params.celebId)}, (err, result) => {
    if (err) { 
      return err;
    } else {
      res.render('celebrities/show', {
          celebrities: result
        });
    }
  });
});



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