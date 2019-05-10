const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: { type: String },
  occupation: { type: String },
  catchPhrase: {type: String },
});

// 'celebrities' refers to the collection in celebrities database
const Celebrity = mongoose.model('celebrities', celebritySchema);
module.exports = Celebrity;


