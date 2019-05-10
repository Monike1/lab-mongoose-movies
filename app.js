const express = require("express");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrities', { useNewUrlParser: true });
const hbs = require('hbs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

mongoose.connect('mongodb://localhost/celebrities', {useNewUrlParser: true}, (err)=> {
    if(!err) {
      console.log("connected");
    } else {
      console.log("ERROR ERROR ERROR", err);
    }
})


// routing

app.use('/', require('./routes/celebrities'));
app.use('/', require('./routes/index'));




// app.get("/detail", (req, res)=> {
    
//     var objectId = mongoose.Types.ObjectId(req.query.id);
//     console.log(req.query.id)
//     Movie.find({_id: objectId}, (err, result)=> {
//         console.log(result);
//         if(!result[0].duration) {
//             result[0].duration = "Not available";
//         }
//         res.render("detail", {movie: result[0]})
//     })
// })

// app.get("/movie", (req, res)=> {
//     res.render("addMovie")
// })

// app.post("/movie", (req, res)=> {

//     let newMovie = {
//         title: req.body.title,
//         year: req.body.year,
//         director: req.body.director,
//         duration: req.body.duration
//     }
//     console.log(newMovie)
//     Movie.create(newMovie, (err)=> {
//         if(err) res.send("ERROR")
//         else res.redirect(`/?search=${req.body.title}`)
//     })
// })



app.listen(3000, ()=> {
    console.log("Listening!!!!!");
})


