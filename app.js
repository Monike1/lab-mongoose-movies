const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const hbs = require('hbs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

mongoose.connect('mongodb://localhost/imdb', {useNewUrlParser: true}, (err)=> {
    if(!err) {
      console.log("connected");
    } else {
      console.log("ERROR ERROR ERROR", err);
    }
})

const movieSchema = new Schema({
    title: { type: String },
    year: { type: String },
    director: {type: String },
    duration: {type: String}
  })

// 'movies' refers to the collection in imdb database
const Movie = mongoose.model('movies', movieSchema);

app.get("/", (req, res)=> {
    Movie.find({}, (err, result)=> {

        res.render("index", { movies: result});
    })
})

app.get("/detail", (req, res)=> {
    
    var objectId = mongoose.Types.ObjectId(req.query.id);
    console.log(req.query.id)
    Movie.find({_id: objectId}, (err, result)=> {
        console.log(result);
        if(!result[0].duration) {
            result[0].duration = "Not available";
        }
        res.render("detail", {movie: result[0]})
    })
})

app.get("/movie", (req, res)=> {
    res.render("addMovie")
})

app.post("/movie", (req, res)=> {

    let newMovie = {
        title: req.body.title,
        year: req.body.year,
        director: req.body.director,
        duration: req.body.duration
    }
    console.log(newMovie)
    Movie.create(newMovie, (err)=> {
        if(err) res.send("ERROR")
        else res.redirect(`/?search=${req.body.title}`)
    })
})



app.listen(3000, ()=> {
    console.log("Listening!!!!!");
})

