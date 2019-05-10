const express = require("express");
const router = express.Router();

const Celebrity = require('../models/celebrity');


router.get('/celebrities', (req, res) => {
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


module.exports = router;